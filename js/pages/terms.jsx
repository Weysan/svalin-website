/* Terms of service */
const _hrefT = window.SvalinHref;
const _ROUTEST = window.SvalinROUTES;

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

function TermsPage() {
  return (
    <section className="doc-page legal-page">
      <div className="page">
        <div className="overline">Legal</div>
        <h1>Terms of service.</h1>
        <p className="lede">Last updated · April 2026</p>

        <Section n="1" title="Acceptance of terms">
          <p>By accessing or using the Svalin website and platform (“Service”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree to these Terms, please do not use our Service.</p>
        </Section>

        <Section n="2" title="Description of service">
          <p>Svalin provides an AI governance and monitoring platform that enables organisations to audit, observe, and enforce policies on AI model usage. The specific features available to you depend on your subscription plan.</p>
        </Section>

        <Section n="3" title="User accounts">
          <p>To access certain features of the Service, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
        </Section>

        <Section n="4" title="Acceptable use">
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the Service</li>
            <li>Interfere with or disrupt the Service or its infrastructure</li>
            <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
            <li>Use the Service to infringe on the rights of others</li>
          </ul>
        </Section>

        <Section n="5" title="Intellectual property">
          <p>The Service and its original content, features, and functionality are owned by Svalin and are protected by international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
        </Section>

        <Section n="6" title="Data processing and cookies">
          <p>Our processing of personal data is governed by our <a className="inline-link" href={_hrefT(_ROUTEST.privacy)}>Privacy Policy</a>. For enterprise customers, data processing terms are detailed in a separate Data Processing Agreement (DPA).</p>
          <p>This website uses Google Analytics cookies solely to understand how visitors use our site. Analytics cookies are only activated with your explicit consent, given via the cookie banner shown on your first visit. You may withdraw consent at any time by clearing this site’s cookies and local storage in your browser. No advertising or third-party tracking cookies are used.</p>
        </Section>

        <Section n="7" title="Disclaimer of warranties">
          <p>The Service is provided “as is” and “as available” without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components.</p>
        </Section>

        <Section n="8" title="Limitation of liability">
          <p>To the maximum extent permitted by applicable law, Svalin shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
        </Section>

        <Section n="9" title="Modifications">
          <p>We reserve the right to modify these Terms at any time. We will provide notice of material changes by updating the “Last updated” date. Your continued use of the Service after such changes constitutes acceptance of the new Terms.</p>
        </Section>

        <Section n="10" title="Governing law">
          <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law provisions.</p>
        </Section>

        <Section n="11" title="Contact">
          <p>If you have questions about these Terms, please reach out via the <a className="inline-link" href={_hrefT(_ROUTEST.contact)}>contact page</a>.</p>
        </Section>
      </div>
    </section>
  );
}
window.mountPage(<TermsPage />, 'terms');

