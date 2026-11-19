import React from 'react';

export default function BidEvaluation() {
  return (
    <>
<section className="panel locked" id="step-6" aria-labelledby="step-6-title">
<div className="step-head">
<h2 id="step-6-title"><span className="step-num">Step 6</span> · <span id="step-6-action-title">Evaluate</span></h2>
<div className="step-actions">
<button id="run-evaluate-btn" disabled>Run evaluation</button>
<button id="run-evaluate-all-btn" className="secondary" type="button" hidden>Run evaluation for all approved bidders</button>
</div>
</div>
<p id="evaluate-help">Evaluate each bidder against the approved tender requirements using verified document evidence.</p>
<div className="status-line" id="evaluation-status" aria-live="polite"></div>
<span className="lock-note" id="evaluate-lock">Run intake first.</span>
<div id="recommendations"></div>
<div id="manual-review-workspace" hidden>
<div className="manual-review-toolbar">
<button className="secondary" id="back-to-bidders" type="button">Back to bidders</button>
<div className="field">
<label htmlFor="manual-review-vendor">Bidder</label>
<select id="manual-review-vendor"></select>
</div>
<button id="propose-classification-btn" className="secondary" type="button">Re-analyze documents</button>
</div>
<h3 className="manual-bidder-name" id="manual-bidder-name"></h3>
<div className="tender-mismatch" id="tender-mismatch" hidden>
<strong id="tender-mismatch-message"></strong>
<a id="return-to-bidder-uploads" href="/workbench">Return to bidder uploads</a>
</div>
<div className="manual-readiness" id="manual-readiness">
<h3>First, confirm what each document contains</h3>
<p>The bidder files are grouped into procurement categories. Correct a category only when needed; page ranges appear when one PDF contains multiple documents.</p>
</div>
<div className="manual-coverage" id="manual-review-coverage"></div>
<div className="status-line" id="manual-review-status" aria-live="polite"></div>
<div className="manual-review-layout">
<div className="classification-editor-pane">
<div className="classification-save-bar">
<div>
<span id="classification-save-state">No unsaved changes</span>
<div className="classification-reason field" id="classification-reason-wrap" hidden>
<label htmlFor="classification-reason">Reason for change (required)</label>
<input id="classification-reason" type="text" placeholder="Example: Confirmed pages 1–19 are technical specifications" />
</div>
</div>
<div className="classification-save-actions">
<button id="save-classification-btn" type="button">Save changes</button>
<button id="approve-classification-btn" className="secondary" type="button" aria-describedby="manual-review-status">Approve classification</button>
<button id="continue-to-evaluation-btn" type="button" aria-describedby="classification-continue-status" disabled>Run evaluation</button>
</div>
</div>
<div className="status-line" id="classification-continue-status" aria-live="polite"></div>
<div className="manual-document-list" id="manual-document-list"></div>
</div>
<div className="manual-pdf-viewer">
<p className="document-viewer-status" id="manual-pdf-status">Choose a PDF to inspect it here. Click inside it, then use Ctrl+F.</p>
<iframe className="document-frame" id="manual-pdf-frame" title="Bidder document"></iframe>
</div>
</div>
</div>
</section>
    </>
  );
}
