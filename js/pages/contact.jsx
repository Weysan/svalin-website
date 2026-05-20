/* Contact page */

function ContactPage() {
  return (
    <section className="doc-page">
      <div className="page">
        <div className="overline">Contact</div>
        <h1>One inbox, for now.</h1>
        <p className="lede">
          A solo founder reads every message. Sales, support, partnerships, press — same address.
        </p>

        <div className="contact-card">
          <div className="label">Email</div>
          <a className="email" href="mailto:hello@svalinhq.com">hello@svalinhq.com</a>
          <div className="secondary">
            No office, no business park, no calendar tool to wrestle with. Built in Berlin, European by design — data residency, encryption keys and operations all stay within the EU.
          </div>
        </div>
      </div>
    </section>
  );
}
window.mountPage(<ContactPage />, 'contact');
