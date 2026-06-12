import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('moniqopay-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('moniqopay-token', token);
  } else {
    localStorage.removeItem('moniqopay-token');
  }
}

export function getAuthToken() {
  return localStorage.getItem('moniqopay-token');
}

export async function register(data) {
  const res = await api.post('/auth/register', data);
  return res.data;
}

export async function login(data) {
  const res = await api.post('/auth/login', data);
  return res.data;
}

export async function getMe() {
  const res = await api.get('/auth/me');
  return res.data;
}

export async function submitContact(data) {
  const res = await api.post('/contact', data);
  return res.data;
}

export default api;
