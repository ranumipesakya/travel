import { Link, useNavigate } from 'react-router-dom';
import { clearAdminToken, getAdminToken } from '../utils/api';

const AdminNavbar = () => {
  const navigate = useNavigate();
  const token = getAdminToken();

  const handleLogout = () => {
    clearAdminToken();
    navigate('/admin');
  };
  return (
    <nav className="navbar admin">
      <div className="container">
        <Link to="/" className="logo">
          Visit Sri Lanka
        </Link>
        <div className="nav-links">
          <Link to="/admin/requests" className="nav-link">Tour Requests</Link>
          <Link to="/" className="nav-link">Main Site</Link>
          {token && (
            <button className="btn btn-outline" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
