const contactCards = [
  {
    href: 'mailto:lou.simon.2287@gmail.com',
    label: 'Email',
    title: 'lou.simon.2287@gmail.com',
    cta: 'Envoyer un message',
    icon: 'bi-envelope',
    variant: 'primary'
  },
  {
    href: 'https://www.linkedin.com/in/lou-simon-8511a526a/',
    label: 'LinkedIn',
    title: 'Lou Simon',
    cta: 'Voir le profil',
    icon: 'bi-linkedin',
    variant: 'secondary'
  }
];

function Contact() {
  return (
    <main className="contact-page position-relative w-100 overflow-hidden">
      <div className="contact-grain" aria-hidden="true"></div>
      <div className="contact-glow contact-glow-1" aria-hidden="true"></div>
      <div className="contact-glow contact-glow-2" aria-hidden="true"></div>
      <div className="contact-watermark" aria-hidden="true">GET IN TOUCH</div>

      <section className="contact-inner container px-4 px-lg-5">
        <div className="contact-heading text-center mx-auto">
          <h2 className="contact-title text-uppercase">à la recherche d'opportunités</h2>
        </div>

        <div className="row g-4 g-lg-5">
          {contactCards.map((card) => (
            <div className="col-12 col-md-6" key={card.href}>
              <a
                className={`contact-card d-flex flex-column h-100 ${card.variant === 'primary' ? 'contact-card-primary' : 'contact-card-secondary'}`}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="contact-icon-wrapper">
                  <div className="contact-icon">
                    <i className={`bi ${card.icon}`}></i>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="contact-pill">{card.label}</span>
                  <h3 className="contact-card-title">{card.title}</h3>
                </div>

                <div className="contact-cta mt-auto">
                  <span>{card.cta}</span>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Contact;
