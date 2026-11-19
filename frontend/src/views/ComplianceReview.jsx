import React from 'react';

export default function ComplianceReview() {
  return (
    <>
<section className="panel locked" id="step-3" aria-labelledby="step-3-title">
<div className="step-head tender-review-head">
<h2 id="step-3-title"><span className="step-num">Step 3</span> · Review tender compliance</h2>
<div className="tender-review-actions" aria-label="Compliance actions">
<button className="secondary" id="back-to-tender-review-btn" type="button">Back to tender review</button>
<button className="secondary" id="reload-compliance-btn" type="button">Reload review</button>
<button className="secondary" id="run-compliance-btn" type="button">Re-run tender audit</button>
<button id="proceed-to-contract-btn" type="button">Proceed to evaluation checklist</button>
</div>
</div>
<p>Review tender provisions that may conflict with procurement policy. Address every blocking or uncertain finding before approving the bidder evaluation checklist.</p>
<span className="lock-note">Complete the tender review first.</span>
<div className="message" id="compliance-errors" role="alert"></div>
<div className="compliance-disabled-note" id="compliance-disabled-note" hidden>
<strong>Tender compliance review is not enabled for this project.</strong>
<p>Create a project with tender compliance enabled to review tender provisions against the configured procurement policies.</p>
</div>
<div id="compliance-body" hidden>
<div className="compliance-review-head">
<div>
<span className="eyebrow">Tender assurance</span>
<h3>Is this tender ready to issue?</h3>
<p>Start with the tender wording below. Policy clauses are shown as the governing reason for each finding.</p>
</div>
<div className="compliance-policy-context">
<span>Governing procurement policy</span>
<div id="compliance-policy-badge" className="compliance-policy-badge">
<strong>BHEL Purchase Policy (2013) &amp; Works Policy (2016)</strong>
<small>Inherently applied across standard PSU purchase &amp; works governance</small>
</div>
</div>
</div>
<div className="status-line" id="compliance-status" aria-live="polite"></div>
<div className="compliance-summary" id="compliance-summary" aria-live="polite"></div>
<div className="compliance-coverage" id="compliance-coverage" aria-live="polite"></div>
<div className="compliance-findings-head">
<div>
<h3>Tender findings</h3>
<p id="compliance-filter-summary">Review the tender wording, then confirm the action.</p>
</div>
<div className="compliance-filters" id="compliance-filters" role="toolbar" aria-label="Filter tender compliance findings"></div>
</div>
<div className="compliance-findings-list" id="compliance-findings"></div>
<details className="compliance-reupload">
<summary>Upload a corrected tender</summary>
<p>Use this only after the tender document has been corrected. Understanding and checklist work will restart.</p>
<div className="row">
<div className="field">
<label htmlFor="compliance-reupload-file">Fixed tender file (.pdf / .zip)</label>
<input type="file" id="compliance-reupload-file" accept=".pdf,.zip" />
</div>
<button className="secondary" id="compliance-reupload-btn" type="button">Upload corrected tender</button>
</div>
</details>
</div>
</section>
    </>
  );
}
