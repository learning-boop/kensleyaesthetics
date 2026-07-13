import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { createChatSession, sendChatMessage, generateTreatmentPreview } from '../../services/api';
import { useAppointment } from '../../context/AppointmentContext';
import './ChatWidget.css';

const TREATMENTS = [
  { slug: 'smooth-lines',      label: 'Smooth Lines' },
  { slug: 'face-sculpt',       label: 'Face Sculpt' },
  { slug: 'skin-glow',         label: 'Skin Glow' },
  { slug: 'collagen-restore',  label: 'Collagen Restore' },
  { slug: 'clear-skin',        label: 'Clear Skin' },
  { slug: 'neck-renewal',      label: 'Neck Renewal' },
  { slug: 'full-face-refresh', label: 'Full Face Refresh' },
  { slug: 'stay-youthful',     label: 'Stay Youthful' },
];

const WHATSAPP_NUMBER = '447700000000'; // replace with real number
const STORAGE_KEY     = 'kensley_chat_session';

function formatTime(date) {
  return date.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
}

// ── localStorage helpers ──────────────────────────────────
function loadStoredSession() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

function saveSession({ sessionKey, clientName = '' }) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ sessionKey, clientName }));
    console.log('[Kensley Chat] Session saved to localStorage:', { sessionKey, clientName });
  } catch {}
}

// ── Icons ─────────────────────────────────────────────────
const IconCalendar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.556 4.12 1.524 5.854L0 24l6.302-1.494A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.034-1.385l-.36-.214-3.735.885.918-3.645-.235-.374A9.818 9.818 0 1 1 12 21.818z" />
  </svg>
);

const IconChat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const IconTreatment = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z" />
    <path d="M12 8v4l3 3" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

// ── Image Preview Panel ───────────────────────────────────
function PreviewPanel({ sessionKey, onClose }) {
  const [file, setFile]           = useState(null);
  const [treatment, setTreatment] = useState('');
  const [loading, setLoading]     = useState(false);
  const [result, setResult]       = useState(null);
  const [error, setError]         = useState('');

  async function handleGenerate() {
    if (!file || !treatment) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await generateTreatmentPreview({ imageFile: file, treatment, sessionKey });
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cw-preview-modal">
      <div className="cw-preview-modal__header">
        <span className="cw-preview-modal__title">Treatment Preview</span>
        <button className="cw-header__btn" onClick={onClose} aria-label="Close preview">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="cw-preview-modal__body">
        {!result ? (
          <>
            <div>
              <p className="cw-preview-label">Upload your photo</p>
              <div className="cw-preview-upload">
                <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setFile(e.target.files[0] || null)} />
                {file
                  ? <p className="cw-preview-upload__selected">✦ {file.name}</p>
                  : <p className="cw-preview-upload__text">Click to upload a clear, front-facing photo<br />(JPEG, PNG or WebP · max 8 MB)</p>
                }
              </div>
            </div>
            <div>
              <p className="cw-preview-label">Select a treatment</p>
              <select className="cw-preview-select" value={treatment} onChange={(e) => setTreatment(e.target.value)}>
                <option value="">Choose a treatment</option>
                {TREATMENTS.map((t) => (
                  <option key={t.slug} value={t.slug}>{t.label}</option>
                ))}
              </select>
            </div>
            {error && <p className="cw-preview-error">{error}</p>}
            <button className="cw-preview-generate" onClick={handleGenerate} disabled={!file || !treatment || loading}>
              {loading ? 'Generating…' : 'Generate My Preview'}
            </button>
            <p className="cw-preview-disclaimer">
              AI simulations are for visualisation purposes only. Actual results will vary based on your individual anatomy, skin condition, and treatment plan.
            </p>
          </>
        ) : (
          <div className="cw-preview-result">
            <p className="cw-preview-label">Your AI preview — {TREATMENTS.find(t => t.slug === treatment)?.label}</p>
            <img src={result.resultUrl} alt="AI treatment preview" />
            <p className="cw-preview-disclaimer">{result.disclaimer}</p>
            <button className="cw-preview-generate" onClick={() => { setResult(null); setFile(null); setTreatment(''); }}>
              Try Another Treatment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Home Screen ───────────────────────────────────────────
function HomeScreen({ onOption, onClose, onBook, directLoading, directError, hasStoredSession }) {
  const options = [
    {
      id: 'book',
      icon: <IconCalendar />,
      label: 'Book an Appointment',
      desc: 'Schedule your visit with us',
      action: () => { onClose(); onBook(); },
    },
    {
      id: 'whatsapp',
      icon: <IconWhatsApp />,
      label: 'WhatsApp',
      desc: 'Message us directly',
      action: () => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank'),
    },
    {
      id: 'chat',
      icon: <IconChat />,
      label: 'Chat with Us',
      // If returning user, skip the form entirely
      desc: hasStoredSession ? 'Continue your conversation' : 'Talk to our team via live chat',
      action: () => onOption('contact-form'),
    },
    {
      id: 'treatments',
      icon: <IconTreatment />,
      label: 'Learn About Treatments',
      desc: 'Ask us anything about our services',
      action: () => onOption('chat-direct'),
      loading: directLoading,
    },
  ];

  return (
    <div className="cw-home">
      <div className="cw-home__greeting">
        <p className="cw-home__hello">{hasStoredSession ? 'Welcome back 👋' : 'Hello there 👋'}</p>
        <p className="cw-home__sub">How can we help you today?</p>
      </div>
      <div className="cw-home__options">
        {options.map((opt) => (
          <button
            key={opt.id}
            className={`cw-option${opt.loading ? ' cw-option--loading' : ''}`}
            onClick={opt.action}
            disabled={opt.loading}
          >
            <span className="cw-option__icon">
              {opt.loading ? <span className="cw-option__spinner" /> : opt.icon}
            </span>
            <span className="cw-option__text">
              <span className="cw-option__label">{opt.label}</span>
              <span className="cw-option__desc">
                {opt.loading ? 'Connecting…' : opt.desc}
              </span>
            </span>
            {!opt.loading && <span className="cw-option__arrow"><IconArrow /></span>}
          </button>
        ))}
        {directError && <p className="cw-home__error">{directError}</p>}
      </div>
    </div>
  );
}

// ── Contact Form Screen ───────────────────────────────────
function ContactFormScreen({ onSubmit, onBack }) {
  const [name, setName]     = useState('');
  const [email, setEmail]   = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    setError('');
    try {
      const data = await createChatSession({ clientName: name.trim(), clientEmail: email.trim() });
      saveSession({ sessionKey: data.sessionKey, clientName: name.trim() });
      onSubmit({ sessionKey: data.sessionKey, clientName: name.trim() });
    } catch {
      setError('Could not start chat. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="cw-contact-form">
      <button className="cw-back" onClick={onBack}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </button>

      <p className="cw-home__hello" style={{ marginTop: 8 }}>Before we start</p>
      <p className="cw-home__sub">Just a couple of details so we can personalise your experience.</p>

      <form className="cw-form" onSubmit={handleSubmit}>
        <div className="cw-form__field">
          <label className="cw-form__label">Your Name</label>
          <input
            className="cw-form__input"
            type="text"
            placeholder="e.g. Sarah"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
        </div>
        <div className="cw-form__field">
          <label className="cw-form__label">Email Address</label>
          <input
            className="cw-form__input"
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {error && <p className="cw-form__error">{error}</p>}
        <button className="cw-form__submit" type="submit" disabled={!name.trim() || !email.trim() || loading}>
          {loading ? 'Starting chat…' : 'Start Chatting →'}
        </button>
      </form>
    </div>
  );
}

// ── Chat Screen ───────────────────────────────────────────
function ChatScreen({ sessionKey: initialSessionKey, clientName, initialMessage, showPreview, setShowPreview }) {
  const [messages, setMessages]         = useState([]);
  const [input, setInput]               = useState('');
  const [typing, setTyping]             = useState(false);
  const [previewShown, setPreviewShown] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef       = useRef(null);
  const sessionKeyRef  = useRef(initialSessionKey);
  const didAutoSend    = useRef(false); // prevent double auto-send

  // Safety net: create session on first message if somehow missing
  async function ensureSession() {
    if (sessionKeyRef.current) return sessionKeyRef.current;
    const data = await createChatSession();
    saveSession({ sessionKey: data.sessionKey });
    sessionKeyRef.current = data.sessionKey;
    return data.sessionKey;
  }

  async function sendMessage(text) {
    const key  = await ensureSession();
    const data = await sendChatMessage({ sessionKey: key, message: text });
    return data.reply;
  }

  useEffect(() => {
    const greeting = clientName
      ? `Hi ${clientName}! I'm Kensley, your Kensley Aesthetics assistant. What can I help you with today?`
      : "Hi! I'm Kensley, your Kensley Aesthetics assistant. What can I help you with today?";

    setMessages([{ role: 'assistant', content: greeting, time: new Date() }]);

    // Auto-send the initial message (e.g. from "Learn About Treatments")
    if (initialMessage && !didAutoSend.current) {
      didAutoSend.current = true;
      setTimeout(async () => {
        setMessages((prev) => [...prev, { role: 'user', content: initialMessage, time: new Date() }]);
        setTyping(true);
        try {
          const reply = await sendMessage(initialMessage);
          setMessages((prev) => [...prev, { role: 'assistant', content: reply, time: new Date() }]);
        } catch {
          setMessages((prev) => [...prev, { role: 'assistant', content: "I'm having trouble connecting right now. Please try again.", time: new Date() }]);
        } finally {
          setTyping(false);
        }
      }, 600);
    } else {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typing]);

  async function handleSend() {
    const text = input.trim();
    if (!text || typing) return;

    setMessages((prev) => [...prev, { role: 'user', content: text, time: new Date() }]);
    setInput('');
    setTyping(true);

    try {
      const reply = await sendMessage(text);
      setMessages((prev) => [...prev, { role: 'assistant', content: reply, time: new Date() }]);

      if (!previewShown) {
        setPreviewShown(true);
        setTimeout(() => {
          setMessages((prev) => [...prev, { role: '__preview_prompt', time: new Date() }]);
        }, 700);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.", time: new Date() },
      ]);
    } finally {
      setTyping(false);
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  return (
    <>
      <div className="cw-messages">
        {messages.map((msg, i) => {
          if (msg.role === '__preview_prompt') {
            return (
              <div key={i} className="cw-preview-prompt" onClick={() => setShowPreview(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setShowPreview(true)}>
                <span className="cw-preview-prompt__text">Want to see how you'd look after treatment? Try our AI preview →</span>
                <span className="cw-preview-prompt__arrow">✦</span>
              </div>
            );
          }
          return (
            <div key={i} className={`cw-msg cw-msg--${msg.role}`}>
              <div className="cw-msg__bubble">
                {msg.role === 'assistant' ? (
                  <div className="cw-md"><ReactMarkdown>{msg.content}</ReactMarkdown></div>
                ) : (
                  msg.content
                )}
              </div>
              <span className="cw-msg__time">{formatTime(msg.time)}</span>
            </div>
          );
        })}
        {typing && <div className="cw-typing"><span /><span /><span /></div>}
        <div ref={messagesEndRef} />
      </div>

      <div className="cw-input-bar">
        <textarea
          ref={inputRef}
          className="cw-input"
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Ask about treatments…"
          disabled={typing}
        />
        <button className="cw-send" onClick={handleSend} disabled={!input.trim() || typing} aria-label="Send message">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </>
  );
}

// ── Main Widget ───────────────────────────────────────────
function ChatWidget() {
  const { openDrawer } = useAppointment();
  const [open, setOpen]               = useState(false);
  const [view, setView]               = useState('home');
  const [sessionKey, setSessionKey]   = useState(null);
  const [clientName, setClientName]   = useState('');
  const [initialMessage, setInitialMessage] = useState('');
  const [unread, setUnread]           = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [directLoading, setDirectLoading] = useState(false);
  const [directError, setDirectError]     = useState('');

  // Restore session from localStorage on mount
  useEffect(() => {
    const stored = loadStoredSession();
    if (stored?.sessionKey) {
      setSessionKey(stored.sessionKey);
      setClientName(stored.clientName || '');
    }
  }, []);

  const hasStoredSession = Boolean(sessionKey);

  function handleClose() { setOpen(false); }

  async function handleOption(option) {
    if (option === 'contact-form') {
      // If returning user — skip form, go straight to chat
      if (hasStoredSession) {
        setInitialMessage('');
        setView('chat');
      } else {
        setView('contact-form');
      }
    } else if (option === 'chat-direct') {
      const TREATMENT_QUESTION = "Can you tell me about the treatments you offer? I'd like to know what's available and what might suit me.";

      if (hasStoredSession) {
        // Already have a session — go straight to chat with the question
        setInitialMessage(TREATMENT_QUESTION);
        setView('chat');
        return;
      }

      // No session — create one anonymously then go to chat with the question
      setDirectLoading(true);
      setDirectError('');
      try {
        const data = await createChatSession();
        saveSession({ sessionKey: data.sessionKey });
        setSessionKey(data.sessionKey);
        setInitialMessage(TREATMENT_QUESTION);
        setView('chat');
      } catch {
        setDirectError('Could not connect. Please try again.');
      } finally {
        setDirectLoading(false);
      }
    }
  }

  function handleContactSubmit({ sessionKey: key, clientName: name }) {
    setSessionKey(key);
    setClientName(name);
    setInitialMessage('');
    setView('chat');
  }

  function handleTriggerClick() {
    setOpen((o) => {
      if (o) return false;
      setUnread(0);
      return true;
    });
  }

  function handleGoHome() {
    setView('home');
    setInitialMessage('');
  }

  const showHeader = view === 'chat';

  return (
    <>
      <button className="cw-trigger" onClick={handleTriggerClick} aria-label={open ? 'Close chat' : 'Open chat'}>
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
        {!open && unread > 0 && <span className="cw-badge">{unread}</span>}
      </button>

      {open && (
        <div className="cw-panel" role="dialog" aria-label="Chat with Kensley Aesthetics">

          {showPreview && (
            <PreviewPanel sessionKey={sessionKey} onClose={() => setShowPreview(false)} />
          )}

          {/* Header — chat view */}
          {showHeader && (
            <div className="cw-header">
              <div className="cw-header__info">
                <div className="cw-header__avatar">✦</div>
                <div>
                  <div className="cw-header__name">Kensley Aesthetics{clientName ? ` · ${clientName}` : ''}</div>
                  <div className="cw-header__status">Kensley Aesthetics Assistant</div>
                </div>
              </div>
              <div className="cw-header__actions">
                <button className="cw-header__btn" onClick={handleGoHome} title="Back to menu" aria-label="Back to menu">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </button>
                <button className="cw-header__btn" onClick={handleClose} aria-label="Close chat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Top bar — home / form views */}
          {!showHeader && (
            <div className="cw-panel-topbar">
              <div className="cw-panel-topbar__brand">
                <span className="cw-panel-topbar__dot">✦</span>
                <span className="cw-panel-topbar__name">Kensley Aesthetics</span>
              </div>
              <button className="cw-header__btn" onClick={handleClose} aria-label="Close">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {view === 'home' && (
            <HomeScreen
              onOption={handleOption}
              onClose={handleClose}
              onBook={openDrawer}
              directLoading={directLoading}
              directError={directError}
              hasStoredSession={hasStoredSession}
            />
          )}

          {view === 'contact-form' && (
            <ContactFormScreen
              onSubmit={handleContactSubmit}
              onBack={() => setView('home')}
            />
          )}

          {view === 'chat' && sessionKey && (
            <ChatScreen
              key={sessionKey}
              sessionKey={sessionKey}
              clientName={clientName}
              initialMessage={initialMessage}
              showPreview={showPreview}
              setShowPreview={setShowPreview}
            />
          )}
        </div>
      )}
    </>
  );
}

export default ChatWidget;
