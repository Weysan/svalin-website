/* FAQ page — grouped accordion */
const { useState } = React;
const _hrefF = window.SvalinHref;
const _ROUTESF = window.SvalinROUTES;

const FAQ_GROUPS = [
  {
    title: 'Coverage & Scope',
    items: [
      {
        q: 'Does Svalin cover all AI tool usage across my organisation?',
        a: "No. Svalin's scope is the developer tool layer: MCP tool calls, LLM interactions, and configuration integrity for supported agents — currently Claude Code, Claude Desktop, Cursor, and Gemini CLI. Usage outside that scope — other tools, web UI, copy-paste, remote dev boxes — is outside Svalin's visibility. Svalin doesn't claim to see what it doesn't govern.",
      },
      {
        q: 'Which AI agents are supported?',
        a: 'Currently supported: Claude Code, Claude Desktop, Cursor, and Gemini CLI. These are the four most widely adopted AI coding agents in regulated engineering teams. Support for additional MCP-compatible agents is on the roadmap — tell us what your team uses via the demo request form.',
      },
      {
        q: 'What happens if a developer uses an unsupported AI tool?',
        a: "Svalin won't see it. Svalin's scope covers supported agents — Claude Code, Claude Desktop, Cursor, and Gemini CLI — and specifically their MCP tool calls and LLM interactions. If a developer uses a different tool, that activity is outside Svalin's visibility entirely. Svalin doesn't claim to govern what it cannot see.",
      },
      {
        q: "Does Svalin work if developers use the AI tool's web interface instead of the desktop client?",
        a: "Web UI usage is outside Svalin's current scope. The platform will flag the absence of expected session activity on enrolled devices, which can indicate out-of-scope usage. Full web UI governance is on the roadmap.",
      },
      {
        q: 'What about developers using personal laptops or unmanaged devices?',
        a: 'Svalin requires MDM enrollment. Unmanaged devices are outside scope and will appear as coverage gaps in the platform. We recommend pairing Svalin with MDM enrollment enforcement for complete fleet coverage.',
      },
    ],
  },
  {
    title: 'Bypass & Security',
    items: [
      {
        q: "Can a developer bypass Svalin's governance controls?",
        a: "Svalin continuously monitors agent configuration files for tampering — including changes to the LLM proxy URL, addition of unapproved MCP servers, and hook suppression. Detected changes trigger automatic policy re-application and a compliance alert. A developer with local admin rights could attempt more advanced bypasses — these are surfaced as anomalies and coverage gaps, not silently ignored. No governance tool can claim to prevent all possible bypasses; Svalin's approach is to detect, alert, and document.",
      },
      {
        q: 'What does "tamper-evident" actually mean?',
        a: 'Tamper-evident means that events are cryptographically signed and hash-chained before leaving the device. This proves that log entries were not modified, deleted, or reordered after capture. It does not mean Svalin captured every possible event — it means what was captured can be proven to be accurate and unmodified. Sequence numbers and heartbeat checks allow auditors to identify gaps in session coverage.',
      },
      {
        q: 'Can Svalin prove that nothing was missed?',
        a: "No governance tool can make this claim honestly. Svalin provides tamper-evident evidence of observed activity on enrolled devices running supported agents, combined with coverage gap detection and device posture attestation. Auditors receive a documented picture of what was governed, what policy was active, and where coverage ended — not a claim of omniscience.",
      },
      {
        q: 'What happens if a developer has local administrator rights?',
        a: "A local admin could attempt to disable the Svalin agent or modify its configuration. Svalin's configuration integrity monitoring detects these attempts and raises compliance alerts. Persistent tampering on a device will appear as a sustained coverage gap and policy violation on the platform. For high-risk environments, we recommend pairing Svalin with MDM-enforced restrictions on local admin rights.",
      },
    ],
  },
  {
    title: 'Architecture & Technical',
    items: [
      {
        q: 'How does Svalin intercept MCP tool calls?',
        a: "Svalin wraps the MCP configuration of supported AI coding tools to proxy tool calls through its local agent. It does not modify the AI tool itself. The interception happens at the configuration layer — the tool is redirected to communicate through Svalin's proxy, which logs, enforces policy, and forwards the call transparently.",
      },
      {
        q: 'How does Svalin attribute activity to a specific developer?',
        a: 'Svalin uses process tree analysis — tracking parent and child process IDs (PID/PPID) — to attribute agent activity to the developer\'s session. This allows the platform to reconstruct the full coding flow from the initial developer prompt to session close, attributing each tool call to the right person on the right device.',
      },
      {
        q: 'Does Svalin modify how AI tools work for developers?',
        a: 'No. Developer workflow is unchanged. Svalin operates transparently — approved tool calls proceed normally, redacted content is removed before transmission, and blocked operations are logged. Developers do not need to change how they work.',
      },
      {
        q: 'What MDM platforms does Svalin support?',
        a: 'Jamf, Microsoft Intune, and Kandji. Additional MDM platforms are on the roadmap.',
      },
      {
        q: 'Does Svalin access AI conversation content?',
        a: 'Logging scope is configurable. By default, Svalin logs session metadata — data categories transferred, AI provider, timestamp, and policy decisions — not raw conversation content. For customers who require it, full content logging can be enabled with appropriate access controls and data residency settings.',
      },
      {
        q: 'What happens if Svalin goes down?',
        a: 'Zero impact on your teams. Local agents simply log information and never interfere with actual tool calls. Your teams continue working uninterrupted — no blocking dependency, no downtime risk.',
      },
    ],
  },
  {
    title: 'Compliance & Audit',
    items: [
      {
        q: 'What does "evidence packs mapped to control objectives" mean?',
        a: "Svalin generates structured exports of audit evidence — session logs, policy snapshots, device posture records, coverage reports — organised and labelled against specific control objectives in EU AI Act, ISO 42001, SOC 2, ISO 27001, and GDPR frameworks. These are not compliance certifications — they are the documented evidence your auditor will ask for. The difference matters: Svalin helps you demonstrate compliance, not claim it.",
      },
      {
        q: "Will Svalin's audit logs satisfy an ISO 42001 auditor?",
        a: "Svalin's logs cover the AI tool governance layer — what agents did, what data they accessed, what policies were active, and whether devices remained in a governed state. Whether this satisfies a specific auditor depends on your overall AI management system and how Svalin fits within it. We recommend discussing your specific control requirements with us before your audit cycle.",
      },
      {
        q: 'How long are logs retained?',
        a: 'Retention periods are configurable based on your pricing tier. Retention policies are set at the organisation level and enforced by the platform. Contact us to discuss your retention requirements.',
      },
    ],
  },
  {
    title: 'Privacy & Data',
    items: [
      {
        q: 'How is the data stored and secured?',
        a: 'All data is fully encrypted and stored on European servers. Encryption keys are hosted with a separate European cloud provider and are never shared with our hosting platform, ensuring complete separation of concerns. Data can only be decrypted by authorised users through the platform, with separate keys per organisation.',
      },
      {
        q: 'Where is the data hosted?',
        a: 'All data is hosted on EU-based servers, fully compliant with GDPR requirements. Encryption keys are managed by a separate European cloud provider, ensuring that no single vendor has access to both your data and the keys to decrypt it.',
      },
      {
        q: 'Does Svalin store sensitive data from developer sessions?',
        a: 'Svalin is designed with data minimisation in mind. By default, only metadata is stored. If content logging is enabled, PII and credential redaction policies apply before data leaves the device. Role-based access controls restrict who can view log content on the platform. Customers in the EU benefit from EU data residency and separate key management.',
      },
      {
        q: 'Is Svalin compliant with GDPR employee monitoring requirements?',
        a: "Svalin is designed to support GDPR-compliant deployment, including data minimisation, purpose limitation, and role-based access. Employee monitoring obligations vary by jurisdiction — in Germany, for example, works council consultation may be required before deployment. We recommend reviewing your local monitoring disclosure requirements with your legal team before rollout.",
      },
    ],
  },
  {
    title: 'Implementation',
    items: [
      {
        q: 'How long does it take to set up?',
        a: 'For organisations with an existing MDM fleet, initial deployment typically takes less than a day. The Svalin agent is distributed as a standard MDM package. Policy configuration and onboarding support are included for all tiers.',
      },
      {
        q: 'Do developers need to do anything to get started?',
        a: 'No. Deployment is fully managed through MDM. Developers do not need to install, configure, or change anything. The agent operates transparently in the background.',
      },
      {
        q: 'What happens to existing audit logs if we cancel?',
        a: 'Customers retain access to their audit logs for the duration of their contracted retention period after cancellation. Log export in NDJSON, CSV, or OTLP format is available at any time.',
      },
    ],
  },
];

function Chevron({ open }) {
  return (
    <svg
      className={'faq-chevron' + (open ? ' faq-chevron--open' : '')}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function FAQItem({ q, a, id, openId, setOpenId }) {
  const isOpen = openId === id;
  const toggle = () => setOpenId(isOpen ? null : id);
  return (
    <div className={'faq-accordion-item' + (isOpen ? ' open' : '')}>
      <button
        className="faq-accordion-btn"
        aria-expanded={isOpen}
        onClick={toggle}
      >
        {q}
        <Chevron open={isOpen} />
      </button>
      <div className="faq-accordion-answer" aria-hidden={!isOpen}>
        <p>{a}</p>
      </div>
    </div>
  );
}

function FAQPage() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="doc-page">
      <div className="page">
        <div className="overline">FAQ</div>
        <h1>Frequently asked questions.</h1>
        <p className="lede">Honest answers for security and compliance buyers.</p>

        <div className="faq-accordion">
          {FAQ_GROUPS.map((group, gi) => (
            <div key={gi}>
              <p className="faq-group-title">{group.title}</p>
              {group.items.map((item, ii) => {
                const id = `${gi}-${ii}`;
                return (
                  <FAQItem
                    key={id}
                    id={id}
                    q={item.q}
                    a={item.a}
                    openId={openId}
                    setOpenId={setOpenId}
                  />
                );
              })}
            </div>
          ))}
        </div>

        <div className="doc-actions" style={{ marginTop: 48 }}>
          <a className="demo-btn" href={_hrefF(_ROUTESF.demo)}>Request a demo <span className="arrow">→</span></a>
          <a className="ghost-btn" href={_hrefF(_ROUTESF.contact)}>Contact us</a>
        </div>
      </div>
    </section>
  );
}

window.mountPage(<FAQPage />, 'faq');
