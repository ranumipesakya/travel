const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const getAdminToken = () => localStorage.getItem('adminToken');

export const setAdminToken = (token: string) => {
  localStorage.setItem('adminToken', token);
};

export const clearAdminToken = () => {
  localStorage.removeItem('adminToken');
};

export const apiRequest = async (path: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const message = data?.message || `Request failed with status ${res.status}`;
    throw new Error(message);
  }

  return res.json();
};
