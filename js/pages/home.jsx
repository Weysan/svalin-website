/* Home page — Svalin */
const { useState: _u1, useEffect: _u2 } = React;
const _asset = window.SvalinAsset;
const CTAStrip = window.CTAStrip;
const _href  = window.SvalinHref;
const _ROUTES = window.SvalinROUTES;

function Hero() {
  return (
    <section className="hero">
      <div className="page">
        <div className="hero-grid">
          <div>
            <div className="eyebrow">
              <span>Svalin · Observability for AI coding agents</span>
            </div>
            <h1 className="display">
              Engineers keep their speed.<br />
              <em>Security keeps the receipts.</em>
            </h1>
            <p className="lede">
              Svalin is an observability platform for AI coding agents. The local agent ships through your MDM and watches every Cursor, Claude Code, Copilot, and Windsurf session on the device — without changing a single engineering workflow. Security and compliance get the full picture, in one place.
            </p>
            <div className="hero-ctas">
              <a className="demo-btn" href={_href(_ROUTES.demo)}>
                Request a demo <span className="arrow">→</span>
              </a>
              <a className="ghost-btn" href={_href(_ROUTES.how)}>How it works →</a>
            </div>
          </div>

          <div className="hero-shot">
            <img src={_asset('assets/shot-hero-conversation.png')} alt="Svalin conversation detail — governed Claude Code session with duration, token counts, model usage, environment snapshot, active MCP servers, policy version and a chronological timeline of sessions, LLM calls and tool invocations" />
          </div>
        </div>

        <div className="hero-strip">
          <div className="label">Telemetry foundations for</div>
          <div className="compliance">
            <span>SOC&nbsp;2</span>
            <span>ISO&nbsp;27001</span>
            <span>EU&nbsp;AI&nbsp;Act</span>
            <span>GDPR</span>
            <span>DORA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeartbeatJson() {
  const K = ({ children }) => <span className="key">{children}</span>;
  const S = ({ children }) => <span className="str">{children}</span>;
  const N = ({ children }) => <span className="num">{children}</span>;
  const P = ({ children }) => <span className="punct">{children}</span>;
  const OK = ({ children }) => <span className="ok">{children}</span>;
  const BAD = ({ children }) => <span className="bad">{children}</span>;

  const lines = [
    <P>{'{'}</P>,
    <>{'  '}<K>"id"</K><P>: </P><S>"evt_47495ce6-5cc5-403c-9dc2-70cefe6db229"</S><P>,</P></>,
    <>{'  '}<K>"scope"</K><P>: </P><S>"agent"</S><P>,</P></>,
    <>{'  '}<K>"device_hostname"</K><P>: </P><S>"Raphaels-MacBook-Pro-2.local"</S><P>,</P></>,
    <>{'  '}<K>"os_user"</K><P>: </P><S>"raphaelgoncalves"</S><P>,</P></>,
    <>{'  '}<K>"os_platform"</K><P>: </P><S>"macos"</S><P>,</P></>,
    <>{'  '}<K>"agent_version"</K><P>: </P><S>"v0.5.0-prod"</S><P>,</P></>,
    <>{'  '}<K>"governance_status"</K><P>: </P><OK>"governed"</OK><P>,</P></>,
    <>{'  '}<K>"event_type"</K><P>: </P><S>"heartbeat"</S><P>,</P></>,
    <>{'  '}<K>"chain_status"</K><P>: </P><BAD>"broken"</BAD><P>,</P></>,
    <>{'  '}<K>"occurred_at"</K><P>: </P><S>"2026-05-19T18:28:15.831Z"</S><P>,</P></>,
    <>{'  '}<K>"payload"</K><P>: {'{'}</P></>,
    <>{'    '}<K>"interval_ms"</K><P>: </P><N>30000</N><P>,</P></>,
    <>{'    '}<K>"active_sessions"</K><P>: </P><N>0</N><P>,</P></>,
    <>{'    '}<K>"governance_status"</K><P>: </P><OK>"governed"</OK></>,
    <>{'  '}<P>{'}'}</P></>,
    <P>{'}'}</P>,
  ];

  return (
    <pre className="json-block">
      {lines.map((l, i) => (
        <React.Fragment key={i}>{l}{'\n'}</React.Fragment>
      ))}
    </pre>
  );
}

function CredibilityBento() {
  return (
    <section className="bento">
      <div className="page">
        <div className="bento-grid">
          <div className="bento-card">
            <div className="head">
              <div className="overline"><span className="dot"></span>The agent event ledger</div>
              <h3>One stream for every Cursor, Claude or Gemini session your fleet ran.</h3>
            </div>
            <div className="shot crop">
              <img src={_asset('assets/shot-conversations.png')} alt="Svalin conversations table with 85 governed sessions across Claude Code and Gemini CLI" />
            </div>
            <div className="caption">
              Svalin aggregates fragmented agent sessions into a centralized compliance stream. Filter by local OS user, active MCP servers, or behavioral risk signatures across your entire machine fleet.
            </div>
          </div>

          <div className="bento-stack">
            <div className="bento-card">
              <div className="head">
                <div className="overline"><span className="dot"></span>Host environment mapping</div>
                <h3>Every AI coding tool on every device, mapped without asking.</h3>
              </div>
              <div className="shot crop">
                <img src={_asset('assets/shot-detected-tools.png')} alt="Detected and governed AI coding tools — Claude Desktop, Claude CLI, Gemini CLI, Cursor with their config file paths" />
              </div>
              <div className="caption">
                Svalin maps your active configuration matrix automatically. It monitors system directories for Cursor, Gemini and Claude without asking developers to change their environment.
              </div>
            </div>

            <div className="bento-card">
              <div className="head">
                <div className="overline"><span className="dot"></span>Immutable state telemetry</div>
                <h3>Every heartbeat, validated. The chain breaks loudly when it should.</h3>
              </div>
              <div className="shot code">
                <HeartbeatJson />
              </div>
              <div className="caption">
                Svalin structures every agent heartbeat and system log into validated state payloads. Security teams can instantly verify telemetry integrity right out of the box.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePrinciples() {
  const items = [
    { n: '01', h: 'Engineers don\u2019t change a thing.', p: 'Deployed through your MDM in the same wave as any other endpoint. The agent watches Cursor, Claude Code, Copilot, Windsurf and the MCP servers they connect to — invisibly, on the device. No proxy, no new IDE settings, no tickets in the engineering backlog.' },
    { n: '02', h: 'One registry, every surface.', p: 'Governed devices, supported AI coding agents, connected MCP servers — all in one place. The CISO surface answers \u201cwho is using what, where\u201d without an email thread.' },
    { n: '03', h: 'Incidents, not log floods.', p: 'Secrets, credentials, PII and policy violations surface as incidents — triaged, owned, resolved. Everything else stays in the timeline where it belongs.' },
    { n: '04', h: 'Compliance, as a side effect.', p: 'A signed, append-only audit trail of every call by every AI agent on every device. SOC 2, ISO 27001 and EU AI Act evidence falls out of the system you were going to deploy anyway.' },
  ];
  return (
    <section className="block">
      <div className="page">
        <div className="section-head">
          <h2 className="section-title">
            Built around one idea: <em style={{ fontStyle: 'normal', color: 'var(--svalin-muted)' }}>observe without getting in the way.</em>
          </h2>
        </div>
        <div className="principles">
          <div className="principle-list">
            {items.map(it => (
              <div className="principle" key={it.n}>
                <span className="num">{it.n}</span>
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeProse() {
  return (
    <section className="block ice">
      <div className="page">
        <div className="section-head">
          <h2 className="section-title">
            You have an AI policy. <em style={{ color: 'var(--svalin-muted)', fontStyle: 'normal' }}>You don’t have proof anyone follows it.</em>
          </h2>
        </div>
        <div className="prose-grid">
          <div>
            <p>
              Every InfoSec lead we talk to has the same answer: “we have a document registry.” A Notion page, a Confluence space, a PDF that lists the AI coding tools they sanction and how they should be used. None of them can tell you, today, which engineer is actually running which agent against which MCP server.
            </p>
            <p className="muted">
              The gap between the document and reality is where audit findings come from. It is also where credential leaks and unsanctioned MCP servers slip in.
            </p>
            <p className="muted">
              Svalin closes the gap. The platform tells you which AI coding agents are in use across the fleet, which MCP servers they are connected to, and whether each device matches the policy you wrote — without asking engineers to log a thing.
            </p>
          </div>
          <aside className="prose-aside">
            <dl>
              <div>
                <dt>Data residency</dt>
                <dd>European servers (eu-central-1, Frankfurt). Encrypted at rest. Customer-managed key held outside any US cloud.</dd>
              </div>
              <div>
                <dt>Transparency</dt>
                <dd>The agent is inspectable on the device. Any engineer can see, at any moment, exactly what is going through it — a GDPR baseline, and a feature.</dd>
              </div>
              <div>
                <dt>Posture</dt>
                <dd>Observability first. Enforcement when you choose. The agent and the local policy cache are tamper-checked — manual edits don’t hold.</dd>
              </div>
              <div>
                <dt>Footprint</dt>
                <dd>Single signed binary, &lt; 18 MB. Deployed through Jamf, Kandji, Intune.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function HomeFeaturePair() {
  return (
    <section className="block">
      <div className="page">
        <div className="section-head">
          <h2 className="section-title">
            Two surfaces. <em style={{ fontStyle: 'normal', color: 'var(--svalin-muted)' }}>One source of truth.</em>
          </h2>
        </div>
        <div className="feature-pair">
          <div className="feature-body">
            <div className="feature-block">
              <h3><span className="idx">A · Local agent</span></h3>
              <p>Lives on the device, deployed by your MDM in the same wave as any other endpoint tool. Watches every AI coding session in the background — and applies policy locally, with no network round-trip.</p>
              <div className="keylines">
                <div>MDM deployment (Jamf, Kandji, Intune)</div>
                <div>Local policy engine — zero decision latency</div>
                <div>Captures tool calls, file access, MCP traffic</div>
                <div>PII and credential detection on-device</div>
              </div>
            </div>
            <div className="feature-block">
              <h3><span className="idx">B · Governance platform</span></h3>
              <p>The CISO and CTO surface. Registry of every governed device, every supported AI coding agent, every connected MCP server. Central policy management and the full audit trail in one place.</p>
              <div className="keylines">
                <div>Device, agent and MCP server registry</div>
                <div>Central policy management, pushed to every agent</div>
                <div>Incident queue and audit log exploration</div>
                <div>SOC 2 / ISO 27001 / AI Act evidence export</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBento />
      <HomePrinciples />
      <HomeProse />
      <HomeFeaturePair />
      <CTAStrip />
    </>
  );
}

window.mountPage(<HomePage />, 'home');
