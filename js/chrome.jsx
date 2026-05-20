/* Svalin shared chrome — nav, footer, cookie consent, mount helper */
const { useState, useEffect } = React;

// Absolute paths — work identically in every browser regardless of page depth.
const asset = (p) => '/' + p;
const href = (p) => p;

const ROUTES = {
  home:    '/',
  how:     '/how-it-works',
  pricing: '/pricing',
  team:    '/team',
  demo:    '/demo',
  about:   '/about',
  contact: '/contact',
  faq:     '/faq',
  terms:   '/terms',
  privacy: '/privacy',
};

function Wordmark() {
  return (
    <a className="brand" href={href(ROUTES.home)}>
      <img src={asset('assets/logo.svg')} alt="" />
      <div className="wm-block">
        <span className="wordmark">SVALIN</span>
        <span className="subtitle">AI Governance Platform</span>
      </div>
    </a>
  );
}

function TopNav({ active }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [
    { id: 'home',    label: 'Home',         path: ROUTES.home },
    { id: 'how',     label: 'How it works', path: ROUTES.how },
    { id: 'pricing', label: 'Pricing',      path: ROUTES.pricing },
    { id: 'team',    label: 'Team',         path: ROUTES.team },
  ];
  return (
    <>
      <header className="topbar">
        <div className="page topbar-inner">
          <Wordmark />
          <nav className="nav-links">
            {items.map(it => (
              <a key={it.id}
                 className="nav-link"
                 data-active={active === it.id}
                 href={href(it.path)}>
                {it.label}
              </a>
            ))}
          </nav>
          <div className="topbar-right">
            <a className="demo-btn topbar-demo" href={href(ROUTES.demo)}>
              Request a demo <span className="arrow">→</span>
            </a>
            <button
              className="burger-btn"
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>
      {menuOpen && (
        <nav className="mobile-menu" aria-label="Mobile navigation">
          {items.map(it => (
            <a
              key={it.id}
              className={'mobile-nav-link' + (active === it.id ? ' active' : '')}
              href={href(it.path)}
              onClick={() => setMenuOpen(false)}
            >
              {it.label}
            </a>
          ))}
          <a
            className="demo-btn"
            href={href(ROUTES.demo)}
            onClick={() => setMenuOpen(false)}
            style={{ marginTop: 16, justifyContent: 'center' }}
          >
            Request a demo <span className="arrow">→</span>
          </a>
        </nav>
      )}
    </>
  );
}

function CTAStrip() {
  return (
    <section className="cta-strip">
      <div className="page">
        <div className="cta-inner">
          <h2>
            See what AI coding agents <em>accessed yesterday</em>.<br />
            Without asking a single engineer.
          </h2>
          <a className="demo-btn" href={href(ROUTES.demo)}>
            Request a demo <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="page">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
              <img src={asset('assets/logo.svg')} alt="" width="26" height="26" />
              <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
                <span className="wordmark">SVALIN</span>
                <span className="subtitle">AI Governance Platform</span>
              </div>
            </div>
            <p>AI productivity, with the observability your CISO needs. Built in Berlin.</p>
          </div>

          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href={href(ROUTES.about)}>About Svalin</a></li>
              <li><a href={href(ROUTES.team)}>The team</a></li>
              <li><a href={href(ROUTES.contact)}>Contact</a></li>
              <li><a href={href(ROUTES.faq)}>FAQ</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href={href(ROUTES.how)}>How it works</a></li>
              <li><a href={href(ROUTES.pricing)}>Pricing</a></li>
              <li><a href={href(ROUTES.demo)}>Request a demo</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href={href(ROUTES.terms)}>Terms of service</a></li>
              <li><a href={href(ROUTES.privacy)}>Privacy policy</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© Svalin · Built in Berlin, Germany</span>
          <div className="socials">
            <a href="https://www.linkedin.com/company/svalin-hq/about/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7v7.47h-4.56V15.4c0-1.71-.03-3.91-2.38-3.91-2.39 0-2.76 1.86-2.76 3.78V22h-4.56V8z"/></svg>
            </a>
            <a href="https://x.com/svalinHQ" target="_blank" rel="noopener noreferrer" aria-label="X" title="X">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2H21.5l-7.5 8.57L23 22h-6.797l-5.32-6.96L4.8 22H1.54l8.02-9.165L1 2h6.96l4.81 6.36L18.244 2zm-1.19 18h1.83L7.04 4H5.08l11.974 16z"/></svg>
            </a>
            <a href="https://bsky.app/profile/svalinhq.bsky.social" target="_blank" rel="noopener noreferrer" aria-label="Bluesky" title="Bluesky">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.277.04-.415.056-3.911.58-7.386 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.296 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CookieBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem('svalin_consent');
      if (!stored) setShow(true);
    } catch (e) { setShow(true); }
  }, []);

  const decide = (granted) => {
    try { localStorage.setItem('svalin_consent', granted ? 'granted' : 'denied'); } catch (e) {}
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: granted ? 'granted' : 'denied',
      });
    }
    setShow(false);
  };

  if (!show) return null;
  return (
    <div className="cookie-bar" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <div className="cookie-bar-inner">
        <div className="cookie-text">
          <strong>Cookies &amp; analytics.</strong>
          <span>We use Google Analytics to understand how this site is used. Nothing is stored until you accept.</span>
          <a href={href(ROUTES.privacy)}>Privacy policy</a>
        </div>
        <div className="cookie-actions">
          <button className="ghost-btn" onClick={() => decide(false)}>Decline</button>
          <button className="demo-btn"  onClick={() => decide(true)}>Accept</button>
        </div>
      </div>
    </div>
  );
}

function mountPage(PageElement, activeRoute) {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <>
      <TopNav active={activeRoute} />
      <main>{PageElement}</main>
      <Footer />
      <CookieBar />
    </>
  );
}

Object.assign(window, {
  SvalinAsset: asset, SvalinHref: href, SvalinROUTES: ROUTES,
  TopNav, Footer, CookieBar, CTAStrip, mountPage,
});
