import { useState, useEffect, useCallback } from 'react';
import './AdminAppointments.css';

const BASE = process.env.REACT_APP_API_URL || 'https://renova-backend-liard.vercel.app';
const SESSION_KEY = 'ka_admin_key';

const STATUS_OPTIONS = ['pending', 'confirmed', 'cancelled', 'completed'];
const STATUS_COLOURS = {
  pending:   { bg: '#FEF3C7', text: '#92400E' },
  confirmed: { bg: '#D1FAE5', text: '#065F46' },
  cancelled: { bg: '#FEE2E2', text: '#991B1B' },
  completed: { bg: '#E0E7FF', text: '#3730A3' },
};

function formatDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

function formatCreated(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('en-GB', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

// ── API helpers ───────────────────────────────────────────────
async function apiFetch(path, key, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${key}`,
      ...options.headers,
    },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || data.message || `Error ${res.status}`);
  return data;
}

// ── Key prompt screen ─────────────────────────────────────────
function KeyPrompt({ onSubmit }) {
  const [key, setKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!key.trim()) return;
    setLoading(true);
    setError('');
    try {
      // Validate the key by hitting the health check with it — then fetch appointments
      await apiFetch('/api/appointments?limit=1', key.trim());
      onSubmit(key.trim());
    } catch (err) {
      setError(err.message.includes('401') || err.message.includes('nauthori')
        ? 'Invalid API key. Please check and try again.'
        : err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="adm-gate">
      <div className="adm-gate__card">
        <div className="adm-gate__logo">✦</div>
        <h1 className="adm-gate__title">Kensley Aesthetics</h1>
        <p className="adm-gate__sub">Admin — Appointments</p>
        <form className="adm-gate__form" onSubmit={handleSubmit}>
          <label className="adm-gate__label">Admin API Key</label>
          <input
            className="adm-gate__input"
            type="password"
            placeholder="Enter your admin key"
            value={key}
            onChange={e => setKey(e.target.value)}
            autoFocus
            required
          />
          {error && <p className="adm-gate__error">{error}</p>}
          <button className="adm-gate__btn" type="submit" disabled={loading || !key.trim()}>
            {loading ? 'Verifying…' : 'Access Dashboard'}
          </button>
        </form>
      </div>
    </div>
  );
}

// ── Status badge ──────────────────────────────────────────────
function Badge({ status }) {
  const colours = STATUS_COLOURS[status] || { bg: '#F3F4F6', text: '#374151' };
  return (
    <span className="adm-badge" style={{ background: colours.bg, color: colours.text }}>
      {status}
    </span>
  );
}

// ── Single appointment row ────────────────────────────────────
function AppointmentRow({ appt, apiKey, onUpdated }) {
  const [updating, setUpdating] = useState(false);
  const [open, setOpen] = useState(false);

  async function handleStatus(status) {
    setUpdating(true);
    try {
      await apiFetch(`/api/appointments/${appt.id}/status`, apiKey, {
        method: 'PATCH',
        body: JSON.stringify({ status }),
      });
      onUpdated();
    } catch (err) {
      alert(`Failed to update: ${err.message}`);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <>
      <tr className={`adm-row ${open ? 'adm-row--open' : ''}`} onClick={() => setOpen(o => !o)}>
        <td className="adm-td adm-td--name">
          <span className="adm-name">{appt.name}</span>
          <span className="adm-email">{appt.email}</span>
        </td>
        <td className="adm-td adm-td--service">{appt.service}</td>
        <td className="adm-td adm-td--date">
          <span className="adm-pref-date">{formatDate(appt.preferred_date)}</span>
          <span className="adm-pref-time">{appt.preferred_time}</span>
        </td>
        <td className="adm-td adm-td--booked">{formatCreated(appt.created_at)}</td>
        <td className="adm-td adm-td--status"><Badge status={appt.status} /></td>
        <td className="adm-td adm-td--chevron">
          <span className={`adm-chevron ${open ? 'adm-chevron--open' : ''}`}>›</span>
        </td>
      </tr>
      {open && (
        <tr className="adm-detail-row">
          <td colSpan={6}>
            <div className="adm-detail">
              <div className="adm-detail__grid">
                <div>
                  <p className="adm-detail__label">Phone</p>
                  <p className="adm-detail__value">{appt.phone || '—'}</p>
                </div>
                <div>
                  <p className="adm-detail__label">Notes</p>
                  <p className="adm-detail__value">{appt.notes || '—'}</p>
                </div>
                <div>
                  <p className="adm-detail__label">Appointment ID</p>
                  <p className="adm-detail__value adm-detail__value--mono">{appt.id}</p>
                </div>
              </div>
              <div className="adm-detail__actions">
                <p className="adm-detail__label">Update Status</p>
                <div className="adm-detail__btns">
                  {STATUS_OPTIONS.filter(s => s !== appt.status).map(s => (
                    <button
                      key={s}
                      className="adm-status-btn"
                      style={{ borderColor: STATUS_COLOURS[s]?.text, color: STATUS_COLOURS[s]?.text }}
                      onClick={(e) => { e.stopPropagation(); handleStatus(s); }}
                      disabled={updating}
                    >
                      {updating ? '…' : `Mark ${s}`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

// ── Main dashboard ────────────────────────────────────────────
function Dashboard({ apiKey, onLogout }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading]           = useState(true);
  const [error, setError]               = useState('');
  const [filter, setFilter]             = useState('all');

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const url = filter === 'all'
        ? '/api/appointments?limit=200'
        : `/api/appointments?status=${filter}&limit=200`;
      const data = await apiFetch(url, apiKey);
      setAppointments(data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [apiKey, filter]);

  useEffect(() => { load(); }, [load]);

  const counts = appointments.reduce((acc, a) => {
    acc[a.status] = (acc[a.status] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="adm-dash">
      {/* Header */}
      <div className="adm-header">
        <div className="adm-header__left">
          <span className="adm-header__logo">✦</span>
          <div>
            <h1 className="adm-header__title">Appointments</h1>
            <p className="adm-header__sub">Kensley Aesthetics</p>
          </div>
        </div>
        <div className="adm-header__right">
          <button className="adm-refresh" onClick={load} disabled={loading} title="Refresh">
            {loading ? '…' : '↻'}
          </button>
          <button className="adm-logout" onClick={onLogout}>Sign out</button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="adm-summary">
        {STATUS_OPTIONS.map(s => (
          <div
            key={s}
            className={`adm-stat ${filter === s ? 'adm-stat--active' : ''}`}
            onClick={() => setFilter(filter === s ? 'all' : s)}
          >
            <span className="adm-stat__num" style={{ color: STATUS_COLOURS[s]?.text }}>
              {counts[s] || 0}
            </span>
            <span className="adm-stat__label">{s}</span>
          </div>
        ))}
        <div
          className={`adm-stat ${filter === 'all' ? 'adm-stat--active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <span className="adm-stat__num">{appointments.length}</span>
          <span className="adm-stat__label">total</span>
        </div>
      </div>

      {/* Table */}
      {error && <p className="adm-error">{error}</p>}

      {!loading && appointments.length === 0 && !error && (
        <div className="adm-empty">No appointments {filter !== 'all' ? `with status "${filter}"` : ''} yet.</div>
      )}

      {appointments.length > 0 && (
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th className="adm-th">Client</th>
                <th className="adm-th">Treatment</th>
                <th className="adm-th">Requested Date / Time</th>
                <th className="adm-th">Booked At</th>
                <th className="adm-th">Status</th>
                <th className="adm-th" />
              </tr>
            </thead>
            <tbody>
              {appointments.map(a => (
                <AppointmentRow
                  key={a.id}
                  appt={a}
                  apiKey={apiKey}
                  onUpdated={load}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      {loading && (
        <div className="adm-loading">Loading appointments…</div>
      )}
    </div>
  );
}

// ── Page root ─────────────────────────────────────────────────
function AdminAppointments() {
  const [apiKey, setApiKey] = useState(() => sessionStorage.getItem(SESSION_KEY) || '');

  function handleKeySubmit(key) {
    sessionStorage.setItem(SESSION_KEY, key);
    setApiKey(key);
  }

  function handleLogout() {
    sessionStorage.removeItem(SESSION_KEY);
    setApiKey('');
  }

  if (!apiKey) return <KeyPrompt onSubmit={handleKeySubmit} />;
  return <Dashboard apiKey={apiKey} onLogout={handleLogout} />;
}

export default AdminAppointments;
