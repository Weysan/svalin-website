/* Demo page — Tally embed */

function DemoPage() {
  return (
    <section className="pricing-head" style={{ borderBottom: 'none', paddingBottom: 96 }}>
      <div className="page">
        <div className="row">
          <div></div>
          <div>
            <h1>Request a demo. <span className="muted">A walkthrough, not a pitch.</span></h1>
            <p style={{ marginTop: 18, maxWidth: '56ch' }}>
              Fill in the form below and our team will reach out to schedule a personalised walkthrough of Svalin.
            </p>
            <div style={{
              marginTop: 40,
              maxWidth: 720,
              border: '1px solid var(--svalin-border)',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--svalin-surface)',
              padding: '32px 36px',
            }}>
              <iframe
                src="https://tally.so/embed/zxJY1g?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="Request a demo"
                loading="lazy"
                width="100%"
                height="700"
                frameBorder="0"
                style={{ border: 0, width: '100%', display: 'block', minHeight: 700 }}
              />
            </div>
            <p className="mono muted" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 20 }}>
              We reply within one working day. Berlin hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

window.mountPage(<DemoPage />, 'demo');
