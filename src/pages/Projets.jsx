import { useState, useEffect } from 'react';

function Projets() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Tout');
  const [error, setError] = useState('');

  const GITHUB_USERNAME = 'Lou-Simon';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    fetchGitHubProjects();
  }, []);

  const fetchGitHubProjects = async () => {
    try {
      const headers = {
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28'
      };

      if (GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${GITHUB_TOKEN}`;
      }

      const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=50`, {
        headers
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Rate limit GitHub atteint (403). Ajoutez un token VITE_GITHUB_TOKEN.');
        }
        throw new Error(`GitHub API ${response.status}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error('Réponse GitHub inattendue');
      }

      const projectsSlim = data
        .filter((repo) => !repo.fork)
        .slice(0, 12)
        .map((repo) => ({
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
          description: repo.description || 'Pas de description disponible',
          language: repo.language || 'Autre',
          languages: repo.language ? [repo.language] : [],
          topics: Array.isArray(repo.topics) ? repo.topics : [],
          url: repo.html_url,
          homepage: repo.homepage,
          stars: repo.stargazers_count,
          icon: getIconForLanguage(repo.language)
        }));

      setProjects(projectsSlim);
      setError(projectsSlim.length === 0 ? 'Aucun projet public trouvé sur GitHub pour cet utilisateur.' : '');
    } catch (error) {
      console.error('Erreur lors de la récupération des projets:', error);
      setError(error.message || "Impossible de charger les projets GitHub (rate limit ou réseau).");
    } finally {
      setLoading(false);
    }
  };

  const getIconForLanguage = (language) => {
    const icons = {
      'JavaScript': 'javascript',
      'TypeScript': 'code',
      'Python': 'terminal',
      'Java': 'coffee',
      'C': 'memory',
      'C++': 'memory',
      'C#': 'sports_esports',
      'PHP': 'language',
      'Go': 'speed',
      'Dart': 'smartphone',
      'HTML': 'desktop_windows',
      'CSS': 'palette'
    };
    return icons[language] || 'code';
  };

  const categories = ['Tout', 'JavaScript', 'Python', 'Java', 'C', 'PHP', 'Autre'];

  const filteredProjects = filter === 'Tout' 
    ? projects 
    : projects.filter(p => p.language === filter || (filter === 'Autre' && !['JavaScript', 'Python', 'Java', 'C', 'PHP'].includes(p.language)));

  return (
    <main className="flex-grow-1 w-100">
      <div className="w-100 px-4 px-lg-5 py-5" style={{ paddingTop: '8rem', paddingBottom: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header Section */}
        <div className="mb-5" style={{ marginBottom: '3rem' }}>
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#0f172a' }}>
            Projets
          </h1>
          <p className="fs-5 fw-light mb-4" style={{ color: '#64748b', maxWidth: '48rem' }}>
            Mes projets personnels et universitaires disponibles sur mon github.
          </p>

          {error && (
            <div className="alert alert-warning" role="alert" style={{ maxWidth: '640px' }}>
              {error}
            </div>
          )}

          {/* Filter Buttons */}
          <div className="d-flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-secondary'}`}
                style={{
                  borderRadius: '0.5rem',
                  padding: '0.5rem 1.25rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  transition: 'all 0.2s'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Chargement...</span>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && (
          <div className="row g-4">
            {filteredProjects.length === 0 ? (
              <div className="col-12 text-center py-5">
                <p className="text-muted">Aucun projet trouvé pour cette catégorie.</p>
              </div>
            ) : (
              filteredProjects.map(project => (
                <div key={project.id} className="col-12 col-md-6">
                  {/* Rendre toute la carte cliquable */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <article 
                      className="card h-100 border-0 shadow-sm"
                      style={{
                        borderRadius: '1rem',
                        transition: 'all 0.3s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                        e.currentTarget.style.borderColor = 'transparent';
                      }}
                    >
                      <div className="card-body p-4 d-flex flex-column">
                        {/* Header with Icon and Links */}
                        <div className="d-flex align-items-start justify-content-between mb-3">
                          <div 
                            className="d-flex align-items-center justify-content-center rounded-3"
                            style={{
                              width: '48px',
                              height: '48px',
                              backgroundColor: 'rgba(59, 130, 246, 0.1)',
                              color: '#3b82f6'
                            }}
                          >
                            <i className={`bi bi-${project.icon}`} style={{ fontSize: '24px' }}></i>
                          </div>
                          <div className="d-flex gap-2">
                            {/* Bouton GitHub - empêcher la propagation du clic */}
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                window.open(project.url, '_blank');
                              }}
                              className="btn btn-sm btn-light rounded-circle"
                              style={{ width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                              title="Voir le code sur GitHub"
                            >
                              <i className="bi bi-github" style={{ fontSize: '16px' }}></i>
                            </button>
                            {project.homepage && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(project.homepage, '_blank');
                                }}
                                className="btn btn-sm btn-light rounded-circle"
                                style={{ width: '32px', height: '32px', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                title="Voir le site web"
                              >
                                <i className="bi bi-box-arrow-up-right" style={{ fontSize: '16px' }}></i>
                              </button>
                            )}
                          </div>
                        </div>

                        {/* Title and Description */}
                        <div className="flex-grow-1 mb-3">
                          <h3 className="h5 fw-bold mb-2" style={{ color: '#0f172a' }}>
                            {project.title}
                          </h3>
                          <p className="text-muted" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {project.description}
                          </p>
                        </div>

                        {/* Technologies Tags */}
                        <div className="d-flex flex-wrap gap-2 mt-auto">
                          {/* Afficher les langages >= 5% */}
                          {project.languages && project.languages.map((lang, index) => (
                            <span 
                              key={`lang-${index}`}
                              className="badge"
                              style={{
                                backgroundColor: '#dbeafe',
                                color: '#1e40af',
                                border: '1px solid #93c5fd',
                                padding: '0.375rem 0.75rem',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                borderRadius: '0.375rem'
                              }}
                            >
                              {lang}
                            </span>
                          ))}
                          {/* Afficher tous les topics */}
                          {project.topics && project.topics.map((topic, index) => (
                            <span 
                              key={`topic-${index}`}
                              className="badge"
                              style={{
                                backgroundColor: '#f8fafc',
                                color: '#475569',
                                border: '1px solid #e2e8f0',
                                padding: '0.375rem 0.75rem',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                borderRadius: '0.375rem'
                              }}
                            >
                              {topic}
                            </span>
                          ))}
                          {/* Afficher les étoiles */}
                          {project.stars > 0 && (
                            <span 
                              className="badge d-flex align-items-center gap-1"
                              style={{
                                backgroundColor: '#fef3c7',
                                color: '#92400e',
                                border: '1px solid #fde68a',
                                padding: '0.375rem 0.75rem',
                                fontWeight: 600,
                                fontSize: '0.75rem',
                                borderRadius: '0.375rem'
                              }}
                            >
                              <i className="bi bi-star-fill" style={{ fontSize: '10px' }}></i>
                              {project.stars}
                            </span>
                          )}
                        </div>
                      </div>
                    </article>
                  </a>
                </div>
              ))
            )}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-5">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg d-inline-flex align-items-center gap-2"
            style={{
              borderRadius: '0.75rem',
              padding: '0.75rem 1.5rem',
              fontSize: '0.875rem',
              fontWeight: 700
            }}
          >
            <i className="bi bi-github" style={{ fontSize: '20px' }}></i>
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </main>
  );
}

export default Projets;
