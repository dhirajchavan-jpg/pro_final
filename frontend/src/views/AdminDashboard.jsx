import React from 'react';

export default function AdminDashboard() {
  return (
    <>

<header className="topbar">
<a className="brand" href="/workbench">
<span className="mark" aria-hidden="true"></span>
<span><strong>Tenderabl - Bid Evaluation</strong><small>Operations dashboard</small></span>
</a>
<nav>
<a href="/workbench">Tender workspace</a>
<button id="refresh" type="button">Refresh</button>
<button className="quiet" id="logout" type="button">Sign out</button>
</nav>
</header>
<main>
<section className="page-head">
<div>
<span className="eyebrow">ADMINISTRATION</span>
<h1>Billing and audit</h1>
</div>
<div className="project-filter">
<label htmlFor="project">Tender</label>
<select id="project"><option value="">All tenders</option></select>
<small id="updated">Loading…</small>
</div>
</section>
<div className="message" id="message" role="alert" hidden></div>
<section className="metrics" aria-label="Usage summary">
<article><span id="cost-scope">Estimated cost</span><strong id="scope-cost">—</strong><small id="cost-detail"></small></article>
<article><span>Account budget used</span><strong id="spent">—</strong><small id="budget-used">—</small></article>
<article><span>Account budget remaining</span><strong id="remaining">—</strong><small id="budget-limit">—</small></article>
<article><span>Tokens</span><strong id="tokens">—</strong><small id="token-split">—</small></article>
<article><span>Provider calls</span><strong id="calls">—</strong><small id="cache-hits">—</small></article>
<article><span>Failures</span><strong id="failures">—</strong><small id="retries">—</small></article>
<article><span>Audit chain</span><strong id="audit-status">—</strong><small id="audit-events">—</small></article>
</section>
<section className="grid">
<article className="panel activity-panel">
<div className="panel-head">
<div><span className="eyebrow">ACTIVITY</span><h2>What changed</h2></div>
<span className="count" id="activity-count">0 events</span>
</div>
<div className="empty" id="activity-empty">Select a tender to view its activity.</div>
<ol className="timeline" id="activity"></ol>
</article>
<aside className="side-stack">
<article className="panel">
<div className="panel-head"><div><span className="eyebrow">TENDERS</span><h2>Workspace</h2></div></div>
<div className="table-scroll short"><table>
<thead><tr><th>Tender</th><th>Stage</th><th>Bidders</th><th>Updated</th></tr></thead>
<tbody id="projects"></tbody>
</table></div>
</article>
<article className="panel">
<div className="panel-head"><div><span className="eyebrow">COMPUTE</span><h2>Billing by step</h2></div></div>
<div className="table-scroll short"><table>
<thead><tr><th>Step</th><th>Calls</th><th>Tokens / units</th><th>Estimated cost</th><th>Budget share</th></tr></thead>
<tbody id="stages"></tbody>
</table></div>
</article>
</aside>
</section>
<section className="panel calls-panel">
<div className="panel-head">
<div><span className="eyebrow">PROVIDER LOG</span><h2>Recent calls</h2></div>
<span className="count" id="call-count">0 calls</span>
</div>
<div className="table-scroll"><table>
<thead><tr><th>Time</th><th>Stage</th><th>Capability</th><th>Provider / model</th><th>Status</th><th>Tokens / units</th><th>Duration</th><th>Budget share</th></tr></thead>
<tbody id="recent-calls"></tbody>
</table></div>
</section>
</main>


    </>
  );
}
