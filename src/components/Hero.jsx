import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="d-flex flex-column gap-5">
      {/* Badge */}
      <div className="d-flex align-items-center gap-3 animate-fade-in">
        <span className="pulse-dot"></span>
        <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#64748b' }}>
          Portfolio 2024
        </span>
      </div>

      {/* Title */}
      <div className="d-flex flex-column text-start gap-3">
        <h1 className="hero-title animate-slide-up-1">
          Étudiant en <br/>
          <span className="gradient-text">Master Informatique</span>
        </h1>
        <h2 className="hero-subtitle animate-slide-up-2" style={{ maxWidth: '48rem' }}>
          Étudiant en Master ILIADE | Passionné par l'{' '}
          <span className="underline-blue">ingénierie du logiciel </span>.
        </h2>
      </div>

      {/* Buttons */}
      <div className="d-flex flex-wrap gap-4 pt-3 animate-slide-up-3" style={{ opacity: 0 }}>
        <Link to="/projets" className="btn-primary-custom">
          <span style={{ position: 'relative', zIndex: 10 }}>Voir mes projets</span>
          <i className="bi bi-arrow-up-right" style={{ position: 'relative', zIndex: 10, fontSize: '20px' }}></i>
        </Link>
        <Link to="/contact" className="btn-secondary-custom">
          <span>Me contacter</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
