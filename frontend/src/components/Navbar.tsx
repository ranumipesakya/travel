import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

type NavbarProps = {
  variant?: 'default' | 'dark';
};

const Navbar = ({ variant = 'default' }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${variant === 'dark' ? 'admin' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          Visit Sri Lanka
        </Link>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <div className="nav-dropdown">
            <button type="button" className="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">
              Tours <span className="dropdown-caret" />
            </button>
            <div className="dropdown-menu">
              <Link to="/destinations" className="dropdown-link">Sri Lanka Tour Packages</Link>
              <Link to="/special-interest" className="dropdown-link">Special Interest Tours</Link>
              <Link to="/day-tour" className="dropdown-link">Sri Lanka Day Tours</Link>
            </div>
          </div>
          <Link to="/destinations" className="nav-link">Blog</Link>
          <Link to="/tailor-made" className="nav-link" style={scrolled ? { color: 'var(--accent)' } : { borderBottom: '2px solid var(--accent)'}}>Tailor-Made</Link>
          <Link to="/admin" className="nav-link">Admin</Link>
          <Link to="/contact" className="btn btn-primary" style={{color: '#fff'}}>Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
