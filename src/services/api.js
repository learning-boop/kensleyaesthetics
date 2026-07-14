const BASE = process.env.REACT_APP_API_URL || 'https://renova-backend-liard.vercel.app';

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Request failed');
  return data;
}

// ── Contact ──────────────────────────────────────────────
export async function submitContact({ name, email, phone, service, message }) {
  return request('/api/contact', {
    method: 'POST',
    body: JSON.stringify({ name, email, phone, service, message }),
  });
}

// ── Appointments ─────────────────────────────────────────
export async function bookAppointment({ name, email, phone, service, preferred_date, preferred_time, notes }) {
  return request('/api/appointments', {
    method: 'POST',
    body: JSON.stringify({ name, email, phone, service, preferred_date, preferred_time, notes }),
  });
}

// ── Chat ─────────────────────────────────────────────────
export async function sendChatMessage({ messages, message }) {
  return request('/api/chat/message', {
    method: 'POST',
    body: JSON.stringify({ messages, message }),
  });
}

// ── Image Generation ─────────────────────────────────────
export async function generateTreatmentPreview({ imageFile, treatment }) {
  const form = new FormData();
  form.append('image', imageFile);
  form.append('treatment', treatment);

  const res = await fetch(`${BASE}/api/imagegen/preview`, {
    method: 'POST',
    body: form, // no Content-Type header — browser sets multipart boundary
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || 'Image generation failed');
  return data;
}
