import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { apiRequest, setAdminToken } from '../utils/api';

const AdminRegister = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirm) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    try {
      const data = await apiRequest('/admin/register', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
      });
      setAdminToken(data.token);
      navigate('/admin/requests');
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar variant="dark" />
      <section className="py-6" style={{ backgroundColor: 'var(--bg-color)' }}>
        <div className="container" style={{ maxWidth: '520px' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Admin Register</h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Create an admin account to access the dashboard.
          </p>

          <form onSubmit={handleSubmit} className="form-container" style={{ marginTop: '2rem' }}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
              />
            </div>

            {error && (
              <div style={{ color: '#c0392b', marginBottom: '1rem' }}>
                {error}
              </div>
            )}

            <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: '100%' }}>
              {loading ? 'Creating...' : 'Create Admin'}
            </button>

            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <span style={{ color: 'var(--text-muted)' }}>Already have an account?</span>{' '}
              <Link to="/admin" style={{ color: 'var(--primary)', fontWeight: 600 }}>Login</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AdminRegister;
