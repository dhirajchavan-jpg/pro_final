import React from 'react';

export default function EvaluationChecklist() {
  return (
    <>
<section className="panel locked" id="step-4" aria-labelledby="step-4-title">
<div className="step-head tender-review-head">
<div>
<span className="step-num">Step 4</span>
<h2 id="step-4-title">Bid evaluation checklist</h2>
</div>
<div className="tender-review-actions" aria-label="Evaluation checklist actions">
<button className="secondary" id="back-to-ledger-btn">Back to compliance</button>
<button className="secondary" id="load-draft-btn">Reload checklist</button>
<button id="freeze-contract-btn" disabled>Approve checklist and continue</button>
</div>
</div>
<div className="message error" id="compliance-gate-banner" role="status" hidden></div>
<p>Confirm the evaluation basis that will be applied consistently to every bidder.</p>
<span className="lock-note">Complete the understanding run first.</span>
<div className="message" id="freeze-errors" role="alert"></div>
<div className="checklist-review-note">
<strong>How to review</strong>
<span>Choose a category, select a check, and review its requirement, expected proof, and tender evidence. Edit only when the tender has been interpreted incorrectly.</span>
</div>
<div className="checklist-summary" id="checklist-summary" aria-live="polite"></div>
<div className="checklist-toolbar" aria-label="Filter evaluation checklist">
<div className="field checklist-search-field">
<label htmlFor="checklist-search">Search checks</label>
<input type="search" id="checklist-search" placeholder="Search evaluation checks" />
</div>
<div className="field checklist-mobile-category">
<label htmlFor="checklist-family-filter">Category</label>
<select id="checklist-family-filter">
<option value="all">All categories</option>
</select>
</div>
<div className="field">
<label htmlFor="checklist-state-filter">Status</label>
<select id="checklist-state-filter">
<option value="all">All checks</option>
<option value="included">Included</option>
<option value="unresolved">Needs attention</option>
<option value="excluded">Excluded</option>
</select>
</div>
<div className="field checklist-secondary-filter">
<label htmlFor="checklist-origin-filter">Source</label>
<select id="checklist-origin-filter">
<option value="all">All sources</option>
</select>
</div>
<button className="secondary" id="add-criterion-btn" type="button">Add check</button>
</div>
<div className="checklist-workspace">
<aside className="checklist-category-pane" aria-label="Evaluation categories">
<h3>Categories</h3>
<div id="checklist-category-nav"></div>
</aside>
<section className="checklist-list-pane" aria-label="Evaluation checks">
<div className="checklist-list-head">
<div>
<span className="eyebrow">Evaluation checks</span>
<h3 id="checklist-list-title">All categories</h3>
</div>
<p className="checklist-filter-status" id="checklist-filter-status" aria-live="polite"></p>
</div>
<div id="contract-criteria"></div>
</section>
<aside className="checklist-detail-pane" id="checklist-detail-panel" aria-live="polite"></aside>
</div>
<div className="contract-questions" id="contract-questions"></div>
<div className="checklist-save-bar" id="checklist-save-bar">
<div className="field checklist-reason-field">
<label htmlFor="checklist-change-reason">Reason for this checklist update (required)</label>
<input type="text" id="checklist-change-reason" autoComplete="off" placeholder="Describe what changed and why" />
<small>Applies to all unsaved check changes in this save and is recorded in the audit trail.</small>
</div>
<div className="checklist-save-actions">
<span id="checklist-save-state" role="status" aria-live="polite">No unsaved changes</span>
<button id="save-contract-draft-btn" type="button" disabled>Save checklist changes</button>
</div>
</div>
</section>
    </>
  );
}
