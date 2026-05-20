/* How It Works page */
const _hrefH = window.SvalinHref;
const _assetH = window.SvalinAsset;
const _ROUTESH = window.SvalinROUTES;
const CTAStripH = window.CTAStrip;

function AnatomyOfAnAudit() {
  const items = [
    {
      n: 'Phase 01',
      h: 'Local context interception.',
      p: 'Svalin deploys silently via corporate MDM. The lightweight background daemon hooks process execution loops at the system layer, identifying active LLM tools without adding millisecond performance overhead or interrupting engineering speed.',
      img: 'assets/shot-agent-overview.png',
      alt: 'Local agent overview — running, v0.5.0-prod, detected Claude Desktop, Claude CLI, Gemini CLI and Cursor',
      label: 'local agent · overview',
    },
    {
      n: 'Phase 02',
      h: 'Cryptographic execution reconstruction.',
      p: 'Every tool use, spawned sub-agent and terminal mutation is reconstructed sequentially. Svalin creates a real-time, chronological trace ledger of precisely what actions an agent requested and exactly what it touched.',
      img: 'assets/shot-timeline.png',
      alt: 'Conversation timeline with session starts, LLM token usages and shell exec blocks across milliseconds',
      label: 'platform · conversation timeline',
    },
    {
      n: 'Phase 03',
      h: 'Automatic incident creation.',
      p: 'When the trace ledger detects a policy break — profile tampering, an unsanctioned MCP server, a credential read — Svalin opens an incident, links the triggering telemetry event, and assigns an owner. If the device self-heals (a tampered shell profile reverts, an unknown MCP server disconnects) the incident closes itself with the resolution trail intact. No false-positive triage queues.',
      img: 'assets/shot-incident-detail.png',
      alt: 'Profile tampering incident — severity high, dismissed status, with the triggering profile_tampered telemetry event linked and the full JSON payload showing the affected governed variable',
      label: 'platform · incident detail',
    },
    {
      n: 'Phase 04',
      h: 'Centralized security log analysis.',
      p: 'Telemetry data structures map instantly to a centralized ledger. Every process lifecycle event is structured as a cryptographically validated JSON payload, providing the raw foundational evidence your GRC and security engineering teams need to satisfy DORA and ISO risk tracking mandates on demand.',
      img: 'assets/shot-agent-events.png',
      alt: 'Log explorer — agent events with event volume bar chart and validation chain marked valid',
      label: 'platform · agent events',
    },
  ];
  return (
    <section className="audit-section">
      <div className="page">
        <div className="audit-head">
          <div className="overline">Anatomy of an audit</div>
          <h2>The four layers underneath every event you'll show your auditor.</h2>
          <p>What happens between the moment a developer asks Cursor a question and the moment a compliance officer signs off on the quarter — captured, in order, in your tenant.</p>
        </div>
        {items.map(it => (
          <div className="audit-step" key={it.n}>
            <div className="step-row">
              <div className="step-num">{it.n}</div>
              <div>
                <h3>{it.h}</h3>
                <p>{it.p}</p>
              </div>
            </div>
            <div className="audit-shot-label">{it.label}</div>
            <div className="audit-shot">
              <img src={_assetH(it.img)} alt={it.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorksPage() {
  const steps = [
    {
      n: 'Step 01',
      h: 'Ship the agent through MDM.',
      p: 'Push the Svalin agent to every developer device in the same wave as your other endpoint software — Jamf, Kandji, Intune, or any tool that can drop a signed pkg. Engineers see nothing. The agent enrolls itself, identifies the AI coding tools on the machine, and starts capturing.',
      key: 'MDM · svalin-agent-2.4.1.pkg',
      visual: (
        <div className="visual-frame">
          <div className="frame-label">deployment · Jamf Pro</div>
          <div style={{ marginTop: 10, lineHeight: 1.8 }}>
            <div><span className="muted">policy</span> Svalin / All-Macs</div>
            <div className="muted">scope: 247 devices</div>
            <div className="muted">package: svalin-agent-2.4.1.pkg</div>
            <div className="muted">deploying… 233 / 247 enrolled</div>
            <div><span style={{ color: 'var(--color-success)' }}>✓</span> active · reporting to eu-central-1</div>
          </div>
        </div>
      ),
    },
    {
      n: 'Step 02',
      h: 'The registry fills itself.',
      p: 'Within hours, the platform knows every governed device, every AI coding agent installed on it, and every MCP server those agents reach for. No survey. No questionnaire. No engineer told to log anything.',
      key: 'Registry · devices · agents · MCP servers',
      visual: (
        <div className="visual-frame">
          <div className="frame-label">registry · live</div>
          <div className="kvs" style={{ marginTop: 14 }}>
            <span className="k">Governed devices</span><span className="v">233 / 247</span>
            <span className="k">Cursor</span><span className="v">181 devices</span>
            <span className="k">Claude Code</span><span className="v">142 devices</span>
            <span className="k">GitHub Copilot</span><span className="v">198 devices</span>
            <span className="k">Windsurf</span><span className="v">24 devices</span>
            <span className="k">MCP servers seen</span><span className="v">31 unique</span>
            <span className="k">Coverage</span><span className="v" style={{ color: 'var(--color-success)' }}>● 94.3%</span>
          </div>
        </div>
      ),
    },
    {
      n: 'Step 03',
      h: 'Incidents, not log floods.',
      p: 'PII reads, credential leaks, policy violations and unknown MCP servers all surface as incidents — triaged, assigned, and resolved in the platform. The rest of the firehose stays in the timeline, searchable when you need it.',
      key: 'Incidents · PII · credentials · policy',
      visual: (
        <div className="visual-frame">
          <div className="frame-label">incidents · last 7d</div>
          <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['SVL-118', 'credential.read', 'claude on MBP-A1742', 'open',     'var(--color-danger)'],
              ['SVL-117', 'pii.email',       'cursor on MBP-3318',  'review',   'var(--color-warning)'],
              ['SVL-116', 'mcp.unknown',     'claude on MBP-Q221',  'review',   'var(--color-warning)'],
              ['SVL-115', 'credential.read', 'copilot on MBP-0048', 'resolved', 'var(--color-success)'],
              ['SVL-114', 'pii.address',     'cursor on MBP-7711',  'resolved', 'var(--color-success)'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 90px 1fr 80px', gap: 8, fontSize: 11.5 }}>
                <span className="muted">{r[0]}</span>
                <span style={{ color: 'var(--env-accent)' }}>{r[1]}</span>
                <span style={{ color: 'var(--svalin-navy)' }}>{r[2]}</span>
                <span style={{ color: r[4], textAlign: 'right' }}>● {r[3]}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      n: 'Step 04',
      h: 'Audit — already done.',
      p: 'When the auditor asks, hand them a signed, timestamped report mapping every relevant event to your SOC 2 / ISO 27001 / EU AI Act controls. Generated in seconds. Delivered as a PDF, a JSONL bundle, or both. The compliance work was a side effect of running the platform.',
      key: 'Evidence pack · SOC 2 · CC7.2',
      visual: (
        <div className="visual-frame">
          <div className="frame-label">evidence pack · 2026-Q1</div>
          <div className="kvs" style={{ marginTop: 14 }}>
            <span className="k">Framework</span><span className="v">SOC 2 Type II</span>
            <span className="k">Period</span><span className="v">2026-01-01 → 2026-03-31</span>
            <span className="k">Devices in scope</span><span className="v">233</span>
            <span className="k">Tool calls captured</span><span className="v">52,634,118</span>
            <span className="k">Incidents resolved</span><span className="v" style={{ color: 'var(--color-danger)' }}>14 (all closed)</span>
            <span className="k">Signed by</span><span className="v">svalin.evidence.v2</span>
            <span className="k">Hash</span><span className="v" style={{ fontSize: 11 }}>0xa1c8…f24e</span>
            <span className="k">Status</span><span className="v" style={{ color: 'var(--color-success)' }}>● ready to export</span>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <AnatomyOfAnAudit />
      <section className="hiw-head">
        <div className="page">
          <div className="row">
            <div className="section-num">How it works</div>
            <div>
              <h1>From MDM rollout to audit, in four moves.</h1>
              <p style={{ marginTop: 18 }}>
                Most security teams have the registry populated within their first week. Most cut their first compliance evidence pack inside the first quarter — without ever touching an engineer’s laptop.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="page">
        {steps.map(s => (
          <div className="hiw-step" key={s.n}>
            <div className="num">{s.n}</div>
            <div>
              <h2>{s.h}</h2>
              <p>{s.p}</p>
              <div className="keyline">▸ {s.key}</div>
            </div>
            <div>{s.visual}</div>
          </div>
        ))}
      </div>
      <CTAStripH />
    </>
  );
}

window.mountPage(<HowItWorksPage />, 'how');
