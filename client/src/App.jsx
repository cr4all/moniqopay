import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import { getAuthToken, getMe, setAuthToken } from './api/client';

function AppContent({ user, ready, onAuth, onSignOut }) {
  const location = useLocation();
  const hideFooter = ['/sign-in', '/register'].includes(location.pathname);

  if (!ready) return null;

  return (
    <>
      <Header user={user} onSignOut={onSignOut} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn onAuth={onAuth} />} />
          <Route path="/register" element={<Register onAuth={onAuth} />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
      {!hideFooter && <Footer />}
    </>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      getMe()
        .then((data) => setUser(data.user))
        .catch(() => setAuthToken(null))
        .finally(() => setReady(true));
    } else {
      setReady(true);
    }
  }, []);

  const handleAuth = (userData) => setUser(userData);

  const handleSignOut = () => {
    setAuthToken(null);
    setUser(null);
  };

  return (
    <BrowserRouter>
      <AppContent user={user} ready={ready} onAuth={handleAuth} onSignOut={handleSignOut} />
    </BrowserRouter>
  );
}
