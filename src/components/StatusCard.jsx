function StatusCard() {
  return (
    <div className="d-flex flex-column align-items-start align-items-lg-end justify-content-lg-end">
      <div className="status-card animate-fade-in-delay">
        <div className="status-card-inner">
          {/* Header */}
          <div className="d-flex align-items-start justify-content-between">
            <span className="badge-available">
              <span className="pulse-dot-small pulse-dot-green"></span>
              Disponible pour alternance
            </span>
            <div className="d-flex align-items-center justify-content-center rounded-circle bg-white text-secondary" style={{ width: '40px', height: '40px', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <i className="bi bi-pin-angle" style={{ fontSize: '20px', color: '#94a3b8' }}></i>
            </div>
          </div>

          {/* Content */}
          <div className="d-flex flex-column gap-2">
            <p className="mb-0" style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#94a3b8' }}>
              En ce moment
            </p>
            <p className="mb-0 fs-4 fw-bold lh-sm">
              Recherche alternance 2026-2027
            </p>
          </div>

          {/* Footer */}
          <div className="d-flex align-items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(226, 232, 240, 0.6)' }}>
            <div className="d-flex">
              <div className="avatar-circle">LS</div>
            </div>
            <div className="d-flex flex-column">
              <span className="fw-bold" style={{ fontSize: '0.875rem' }}>Lou SIMON</span>
              <span className="text-muted" style={{ fontSize: '0.75rem' }}>Master 1 ILIADE</span>
            </div>
            <div className="ms-auto">
              <i className="bi bi-arrow-right" style={{ color: '#cbd5e1' }}></i>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="status-card-gradient"></div>
      </div>
    </div>
  );
}

export default StatusCard;
