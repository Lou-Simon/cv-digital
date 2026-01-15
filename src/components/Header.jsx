import { Link } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header-custom w-100">
      <div className="w-100 d-flex align-items-center justify-content-between px-4 px-lg-5" style={{ height: '96px' }}>
        {/* Logo */}
        <div className="d-flex align-items-center gap-3">
          <div className="logo-icon">
            <i className="bi bi-terminal" style={{ fontSize: '24px' }}></i>
          </div>
          <h2 className="mb-0 fs-5 fw-bold">Lou SIMON</h2>
        </div>

        {/* Navigation Desktop */}
        <div className="d-none d-md-flex justify-content-center flex-grow-1">
          <nav className="nav-pill">
            <Link to="/" className="nav-link">À propos</Link>
            <Link to="/competences" className="nav-link">Compétences</Link>
            <Link to="/projets" className="nav-link">Projets</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="d-md-none btn btn-link text-dark p-0"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ fontSize: '24px', border: 'none', background: 'none' }}
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x' : 'bi-list'}`}></i>
        </button>

        {/* Social Links Desktop */}
        <div className="d-none d-md-flex align-items-center gap-3">
          <a
            href="https://www.linkedin.com/in/lou-simon-8511a526a/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-icon linkedin"
          >
            <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
          </a>
          <a
            href="https://github.com/Lou-Simon"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-icon github"
          >
            <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
          </a>
          <a
            href="mailto:lou.simon.2287@gmail.com"
            aria-label="Email"
            className="social-icon email"
          >
            <i className="bi bi-envelope" style={{ fontSize: '20px' }}></i>
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="d-md-none" style={{
          position: 'absolute',
          top: '96px',
          left: 0,
          right: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid #e2e8f0',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          zIndex: 1000
        }}>
          <nav className="d-flex flex-column p-4">
            <Link 
              to="/" 
              className="py-3 text-decoration-none fw-semibold text-dark border-bottom"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem' }}
            >
              À propos
            </Link>
            <Link 
              to="/competences" 
              className="py-3 text-decoration-none fw-semibold text-dark border-bottom"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem' }}
            >
              Compétences
            </Link>
            <Link 
              to="/projets" 
              className="py-3 text-decoration-none fw-semibold text-dark border-bottom"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem' }}
            >
              Projets
            </Link>
            <Link 
              to="/contact" 
              className="py-3 text-decoration-none fw-semibold text-dark"
              onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: '1.1rem' }}
            >
              Contact
            </Link>
            
            {/* Social Links Mobile */}
            <div className="d-flex justify-content-center gap-4 mt-4 pt-4 border-top">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-icon linkedin"
              >
                <i className="bi bi-linkedin" style={{ fontSize: '20px' }}></i>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-icon github"
              >
                <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
              </a>
              <a
                href="mailto:contact@example.com"
                aria-label="Email"
                className="social-icon email"
              >
                <i className="bi bi-envelope" style={{ fontSize: '20px' }}></i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
