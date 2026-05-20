/* Privacy policy */
const _hrefPriv = window.SvalinHref;
const _ROUTESPriv = window.SvalinROUTES;

function Section({ n, title, children }) {
  return (
    <div className="legal-section">
      <div className="legal-num">{n}</div>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}

function PrivacyPage() {
  return (
    <section className="doc-page legal-page">
      <div className="page">
        <div className="overline">Legal</div>
        <h1>Privacy policy.</h1>
        <p className="lede">Last updated · May 2026</p>

        <Section n="1" title="Introduction">
          <p>Svalin (“we”, “our”, or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform.</p>
        </Section>

        <Section n="2" title="Information we collect">
          <h3>Information you provide</h3>
          <p>We may collect information that you voluntarily provide when you:</p>
          <ul>
            <li>Request a demo or contact us</li>
            <li>Create an account on our platform</li>
            <li>Subscribe to our communications</li>
          </ul>
          <p>This may include your name, email address, company name, job title, and phone number.</p>

          <h3>Information collected automatically</h3>
          <p>If you accept analytics cookies (see Section 7), we collect anonymised data about how you navigate this website — pages visited, time on page, and referral source. This data is processed by Google Analytics and is used solely to understand how visitors use our site so we can improve it. We do not collect this data if you decline cookies.</p>
        </Section>

        <Section n="3" title="How we use your information">
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your enquiries and demo requests</li>
            <li>Provide, operate, and maintain our platform</li>
            <li>Understand how our website is used (analytics, with your consent only)</li>
            <li>Send you relevant communications (with your consent)</li>
            <li>Comply with legal obligations</li>
          </ul>
        </Section>

        <Section n="4" title="Data sharing">
          <p>We do not sell your personal information. If you accept analytics cookies, anonymised usage data is shared with Google LLC via Google Analytics under their standard terms. No other personal data is shared with third parties except as required to operate our platform or comply with legal obligations.</p>
        </Section>

        <Section n="5" title="Data security">
          <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
        </Section>

        <Section n="6" title="Your rights">
          <p>Under applicable data protection laws (including the GDPR), you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to or restrict processing of your data</li>
            <li>Withdraw consent at any time (for consent-based processing such as analytics cookies)</li>
            <li>Data portability</li>
          </ul>
          <p>To exercise any of these rights, please contact us via the <a className="inline-link" href={_hrefPriv(_ROUTESPriv.contact)}>contact page</a>.</p>
        </Section>

        <Section n="7" title="Cookies and analytics">
          <p>This website uses cookies for one purpose only: Google Analytics, a web analytics service provided by Google LLC. Google Analytics uses cookies to collect anonymised data about how visitors use our site — including pages viewed, time spent, and navigation paths. This data helps us understand and improve the website. No personally identifiable information is collected through Google Analytics.</p>

          <h3>Legal basis</h3>
          <p>We only activate Google Analytics cookies if you explicitly accept them via the cookie consent banner. This processing is based on your consent (GDPR Article 6(1)(a)). You may withdraw consent at any time by clearing your browser’s local storage or cookies.</p>

          <h3>Cookies used</h3>
          <p><code className="kbd">_ga</code>, <code className="kbd">_ga_*</code> — set by Google Analytics to distinguish users and sessions. These cookies do not contain personal data on their own and expire after 2 years (<code className="kbd">_ga</code>) or as configured.</p>

          <h3>To opt out or change your choice</h3>
          <p>Clear this site’s cookies and local storage in your browser settings, then revisit any page — the consent banner will appear again. You can also install the <a className="inline-link" href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

          <p>We do not use advertising cookies, tracking pixels, remarketing tags, or any third-party cookies other than Google Analytics.</p>
        </Section>

        <Section n="8" title="Changes to this policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the “Last updated” date.</p>
        </Section>

        <Section n="9" title="Contact us">
          <p>If you have questions about this Privacy Policy or how we handle your data, please reach out via the <a className="inline-link" href={_hrefPriv(_ROUTESPriv.contact)}>contact page</a>.</p>
        </Section>
      </div>
    </section>
  );
}
window.mountPage(<PrivacyPage />, 'privacy');

