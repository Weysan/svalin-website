/* Pricing page */
const _hrefP = window.SvalinHref;
const _ROUTESP = window.SvalinROUTES;

function PricingPage() {
  const tick = <span className="tick">●</span>;
  const dash = <span className="dash">—</span>;

  const groups = [
    {
      label: 'Coverage',
      rows: [
        { name: 'Local agent, deployed via MDM',       sub: 'Jamf · Kandji · Intune',           dp: 'On demand', s: tick, sc: tick, en: tick },
        { name: 'Supported AI coding agents',          sub: 'Gemini CLI · Claude CLI · Claude Desktop · Cursor — more on roadmap, on-demand additions',  dp: tick, s: tick, sc: tick, en: tick },
        { name: 'MCP server registry',                 sub: 'Auto-discovered per device',       dp: tick, s: tick, sc: tick, en: tick },
        { name: 'Governed device registry',            sub: '',                                  dp: tick, s: tick, sc: tick, en: tick },
      ],
    },
    {
      label: 'Observability',
      rows: [
        { name: 'Full tool-call telemetry',            sub: 'Reads, writes, exec, MCP, HTTP',    dp: tick, s: tick, sc: tick, en: tick },
        { name: 'Log retention',                       sub: '',                                  dp: '90 days', s: '90 days', sc: '6 months', en: '12 months' },
        { name: 'Log explorer and advanced query',     sub: '',                                  dp: tick, s: tick, sc: tick, en: tick },
        { name: 'Event API + webhooks',                sub: '',                                  dp: 'On demand', s: dash, sc: tick, en: tick },
      ],
    },
    {
      label: 'Incidents & compliance',
      rows: [
        { name: 'PII & credential detection',          sub: 'On-device, surfaced as incidents',  dp: tick, s: tick, sc: tick, en: tick },
        { name: 'Incident triage & ownership',         sub: '',                                  dp: tick, s: tick, sc: tick, en: tick },
        { name: 'SOC 2 / ISO 27001 evidence export',   sub: '',                                  dp: dash, s: tick, sc: tick, en: tick },
        { name: 'EU AI Act reporting',                 sub: 'Article 12 logging',                dp: dash, s: dash, sc: tick, en: tick },
      ],
    },
    {
      label: 'Scale',
      rows: [
        { name: 'Device seats',                        sub: '',                                  dp: 'On demand · limited', s: 'Up to 20', sc: 'Up to 100', en: '100+' },
      ],
    },
  ];

  return (
    <>
      <section className="pricing-head">
        <div className="page">
          <div className="row">
            <div></div>
            <div>
              <h1>Four tiers. <span className="muted">Priced per device.</span></h1>
              <p style={{ marginTop: 18 }}>
                One agent, one device — same price whether your engineer uses Cursor, Claude Code, all of the above, or none today and four next quarter. Annual contract, paid monthly. Prices ex-VAT.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="plan-table">
        <div className="page">
          <div className="plan-grid">
            <div className="plan-head first" style={{ borderBottom: '1px solid var(--svalin-border)' }}>
              <div className="mono muted" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Plans</div>
              <div style={{ marginTop: 14, fontSize: 12, color: 'var(--svalin-muted)' }}>
                Per device, per month. Annual contract.
              </div>
            </div>

            <div className="plan-head featured">
              <div className="name" style={{ color: 'var(--svalin-amber)' }}>Design Partner</div>
              <div className="price" style={{ fontSize: 22 }}>Flat fee</div>
              <div className="blurb">Limited cohort. Flat monthly fee, 50% off on conversion to a paying tier.</div>
            </div>
            <div className="plan-head">
              <div className="name">Startup</div>
              <div className="price">€12<span className="per">/ device / mo</span></div>
              <div className="blurb">For teams under twenty engineers shipping with AI today.</div>
            </div>
            <div className="plan-head">
              <div className="name" style={{ color: 'var(--env-accent)' }}>Scale</div>
              <div className="price">€15<span className="per">/ device / mo</span></div>
              <div className="blurb">For security teams that need SOC 2 / ISO 27001 evidence on autopilot.</div>
            </div>
            <div className="plan-head">
              <div className="name">Enterprise</div>
              <div className="price">€20<span className="per">/ device / mo</span></div>
              <div className="blurb">100+ devices, 12-month log retention, priority support and a named contact.</div>
            </div>

            {groups.map(g => (
              <React.Fragment key={g.label}>
                <div className="row-group-label">{g.label}</div>
                {g.rows.map((r) => (
                  <React.Fragment key={r.name}>
                    <div className="cell body-cell">
                      <div className="feat-label">{r.name}</div>
                      {r.sub && <div className="feat-sub">{r.sub}</div>}
                    </div>
                    <div className="cell" style={{ background: 'var(--svalin-amber-tint)' }}>{r.dp}</div>
                    <div className="cell">{r.s}</div>
                    <div className="cell">{r.sc}</div>
                    <div className="cell">{r.en}</div>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}

            <div className="plan-cta first" style={{ borderBottom: 'none' }}>
              <div className="mono muted" style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Get started</div>
            </div>
            <div className="plan-cta featured"><a className="plan-btn-dark" href={_hrefP(_ROUTESP.demo)} style={{ display: 'block', textAlign: 'center' }}>Apply</a></div>
            <div className="plan-cta"><a className="plan-btn-ghost" href={_hrefP(_ROUTESP.demo)} style={{ display: 'block', textAlign: 'center' }}>Talk to founder</a></div>
            <div className="plan-cta"><a className="plan-btn-ghost" href={_hrefP(_ROUTESP.demo)} style={{ display: 'block', textAlign: 'center' }}>Request a demo</a></div>
            <div className="plan-cta"><a className="plan-btn-ghost" href={_hrefP(_ROUTESP.demo)} style={{ display: 'block', textAlign: 'center' }}>Contact sales</a></div>
          </div>

          <p className="mono muted" style={{ fontSize: 11, marginTop: 36, textTransform: 'uppercase', letterSpacing: '0.12em', maxWidth: '64ch' }}>
            All prices ex-VAT. Device = one engineer’s laptop enrolled through MDM. Annual contract, paid monthly.
          </p>
        </div>
      </section>
    </>
  );
}

window.mountPage(<PricingPage />, 'pricing');
