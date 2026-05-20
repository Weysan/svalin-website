/* Team page — solo founder + testimonials */
const _assetT = window.SvalinAsset;
const CTAStripT = window.CTAStrip;

function TeamPage() {
  return (
    <>
      <section className="team-head">
        <div className="page">
          <div className="row">
            <div className="section-num">The team</div>
            <div>
              <h1>Solo founder. <span className="muted">Building from Berlin.</span></h1>
              <p style={{ marginTop: 18 }}>
                Svalin is a solo project today — deliberately. The agent, the platform, and the conversations with early customers all go through the same pair of hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-block" style={{ paddingBottom: 56 }}>
        <div className="page">
          <div className="founder-row">
            <div className="founder-portrait">
              <img src={_assetT('assets/founder-raphael.png')} alt="Raphaël Gonçalves, founder of Svalin" />
            </div>
            <div className="founder-body">
              <span className="lbl mono">Founder</span>
              <h2>Raphaël Gonçalves.</h2>
              <p>Raphael is a backend engineer and technical leader with over ten years of experience building and scaling SaaS products. He has led engineering teams through a hypergrowth phase at a messaging automation startup — growing from 10 to 60 people — and has spent years working at the intersection of enterprise software and developer tooling.</p>
              <p className="muted">Most recently working as a tech lead helping an organisation navigate the shift toward agentic development, he saw something that didn’t sit right: developers and non-developers alike adopting AI coding tools across departments, with no visibility into what those tools were accessing, no audit trail, and no way to prove governance was in place.</p>
              <p className="muted">That observation became Svalin.</p>
              <blockquote className="founder-quote">“I wasn’t looking for a startup idea. I was watching colleagues use Claude Code and Gemini on production codebases and realising nobody — including the security team — could answer the question: what did the AI actually access today?”</blockquote>
              <div className="founder-links">
                <a href="https://www.linkedin.com/in/goncalves-raphael/" target="_blank" rel="noopener noreferrer" className="founder-link">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.5 0h4.37v1.92h.06c.61-1.16 2.1-2.39 4.32-2.39 4.62 0 5.47 3.04 5.47 7v7.47h-4.56V15.4c0-1.71-.03-3.91-2.38-3.91-2.39 0-2.76 1.86-2.76 3.78V22h-4.56V8z"/></svg>
                  LinkedIn
                </a>
                <span className="founder-meta mono">Berlin · CET</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStripT />
    </>
  );
}

window.mountPage(<TeamPage />, 'team');
