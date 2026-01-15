function Competences() {
  const competencesData = [
    {
      title: "Technologie Web",
      icon: "bi-globe",
      color: "blue",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "React"]
    },
    {
      title: "Méthode d'analyse",
      icon: "bi-diagram-3",
      color: "red",
      skills: ["UML", "SCRUM"]
    },
    {
      title: "Système d'exploitation",
      icon: "bi-terminal",
      color: "gray",
      skills: ["Linux", "Windows"]
    },
    {
      title: "Outils & Framework",
      icon: "bi-tools",
      color: "orange",
      skills: ["CodeIgniter", "VS Code", "Eclipse", "Bootstrap", "Git/Github"]
    },
    {
      title: "Langages de programmation",
      icon: "bi-code-slash",
      color: "purple",
      skills: ["C", "Java", "OCaml", "Go"]
    },
    {
      title: "Base de données",
      icon: "bi-database",
      color: "green",
      skills: ["SQL", "MySQL", "phpMyAdmin", "MariaDB"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        iconBg: "bg-primary bg-opacity-10",
        iconText: "text-primary",
        hoverBg: "group-hover:bg-primary"
      },
      red: {
        iconBg: "bg-danger bg-opacity-10",
        iconText: "text-danger",
        hoverBg: "group-hover:bg-danger"
      },
      gray: {
        iconBg: "bg-secondary bg-opacity-10",
        iconText: "text-secondary",
        hoverBg: "group-hover:bg-secondary"
      },
      orange: {
        iconBg: "bg-warning bg-opacity-10",
        iconText: "text-warning",
        hoverBg: "group-hover:bg-warning"
      },
      purple: {
        iconBg: "bg-info bg-opacity-10",
        iconText: "text-info",
        hoverBg: "group-hover:bg-info"
      },
      green: {
        iconBg: "bg-success bg-opacity-10",
        iconText: "text-success",
        hoverBg: "group-hover:bg-success"
      }
    };
    return colors[color];
  };

  return (
    <main className="flex-grow-1 w-100">
      <div className="w-100 px-4 px-lg-5 py-5" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header Section */}
        <div className="mb-5 text-center text-lg-start" style={{ marginBottom: '4rem' }}>
          <h2 className="display-4 fw-bold mb-3" style={{ color: '#0f172a' }}>
            Compétences <span style={{ color: '#0056b3' }}>Techniques</span>
          </h2>
          <p className="fs-5 fw-light" style={{ color: '#64748b', maxWidth: '48rem' }}>
            Une vue d'ensemble des compétences techniques acquises lors de ma formation universitaire et à travers les projets personnels et professionnels.
          </p>
        </div>

        {/* Competences Grid */}
        <div className="row g-4">
          {competencesData.map((competence, index) => {
            const colorClasses = getColorClasses(competence.color);
            return (
              <div key={index} className="col-12 col-md-6 col-lg-4">
                <div className="group card h-100 border-0 shadow-sm" style={{ 
                  borderRadius: '1rem',
                  transition: 'all 0.5s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                }}>
                  <div className="card-body p-4">
                    {/* Icon */}
                    <div 
                      className={`d-flex align-items-center justify-center rounded-3 mb-4 ${colorClasses.iconBg} ${colorClasses.iconText}`}
                      style={{ 
                        width: '48px', 
                        height: '48px',
                        transition: 'all 0.3s'
                      }}>
                      <i className={`bi ${competence.icon}`} style={{ fontSize: '24px' }}></i>
                    </div>

                    {/* Title */}
                    <h3 className="h5 fw-bold mb-4" style={{ color: '#0f172a' }}>
                      {competence.title}
                    </h3>

                    {/* Skills Tags */}
                    <div className="d-flex flex-wrap gap-2">
                      {competence.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="badge"
                          style={{
                            backgroundColor: '#f8fafc',
                            color: '#475569',
                            border: '1px solid #e2e8f0',
                            padding: '0.375rem 0.75rem',
                            fontWeight: 600,
                            fontSize: '0.875rem',
                            borderRadius: '0.5rem'
                          }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Competences;
