import React from 'react';

export default function WorkflowNavigation() {
  return (
    <>
<header id="workflow-header" hidden>
<div className="tender-context-bar">
<div className="tender-context-inner">
<button className="tender-back" id="back-dashboard-btn" type="button">← All tenders</button>
<span className="tender-context-divider" aria-hidden="true"></span>
<div className="tender-context-copy">
<span className="tender-breadcrumb">Tenders <span aria-hidden="true">/</span> <span id="workflow-tender-number"></span></span>
<strong id="workflow-tender-title">Loading tender…</strong>
</div>
</div>
</div>
<nav className="stepper" aria-label="Workflow progress">
<a className="step-pill" id="pill-1" href="/workbench"><span className="step-icon">1</span><span>Tender</span></a>
<a className="step-pill" id="pill-2" href="/workbench"><span className="step-icon">2</span><span>Review</span></a>
<a className="step-pill" id="pill-3" href="/workbench"><span className="step-icon">3</span><span>Compliance</span></a>
<a className="step-pill" id="pill-4" href="/workbench"><span className="step-icon">4</span><span>Checklist</span></a>
<a className="step-pill" id="pill-5" href="/workbench"><span className="step-icon">5</span><span>Bids</span></a>
<a className="step-pill" id="pill-6" href="/workbench"><span className="step-icon">6</span><span>Evaluate</span></a>
<a className="step-pill" id="pill-7" href="/workbench"><span className="step-icon">7</span><span>Results</span></a>
<a className="step-pill" id="pill-8" href="/workbench"><span className="step-icon">8</span><span>Report</span></a>
</nav>
<div className="message" id="message" role="alert"></div>
</header>
    </>
  );
}
