/* About page */
const _hrefA = window.SvalinHref;
const _ROUTESA = window.SvalinROUTES;

function AboutPage() {
  return (
    <section className="doc-page">
      <div className="page">
        <div className="overline">About Svalin</div>
        <h1>The best of both worlds.</h1>
        <p className="lede">
          Svalin is a tool that lets engineering teams reach the full potential of AI coding agents, by giving CISOs and compliance teams the full observability they need on the side. No trade-off, no veto, no shadow IT — the same platform serves both rooms.
        </p>
        <p>
          Engineering wants speed. Security wants evidence. Today, those two pull in opposite directions: AI coding tools get adopted ahead of policy, and policy gets written without a way to enforce or verify it. Svalin closes the gap from below — a local agent that watches every AI coding session on every device, and a platform that surfaces what is happening, in real time, to the people who need to know.
        </p>
        <p>
          The result is calm on both sides. Developers keep using Cursor, Claude Code, Gemini and Copilot the way they want to. Security sees every agent, every MCP server, every tool call — with the audit trail required for SOC 2, ISO 27001, EU AI Act and DORA already produced.
        </p>
        <p>
          Built in Berlin. European by design — data residency, encryption keys and operations all stay within the EU.
        </p>
        <div className="doc-actions">
          <a className="demo-btn" href={_hrefA(_ROUTESA.team)}>Meet the team <span className="arrow">→</span></a>
          <a className="ghost-btn" href={_hrefA(_ROUTESA.how)}>How it works</a>
        </div>
      </div>
    </section>
  );
}
window.mountPage(<AboutPage />, 'about');
