import React from 'react';

export default function ReviewHistory() {
  return (
    <>
<section className="panel locked" id="review-log-panel" aria-labelledby="review-log-title">
<div className="step-head">
<h2 id="review-log-title"><span className="step-num">Audit</span> · Review changes</h2>
<button className="secondary" id="load-review-log-btn">Refresh audit</button>
</div>
<p>Recent review actions are shown below. Open the complete history when required.</p>
<span className="lock-note">Load a project first.</span>
<div className="audit-preview" id="review-log-preview" aria-live="polite"></div>
<details className="audit-full" id="review-log-details">
<summary id="review-log-summary">View complete audit trail</summary>
<div className="table-wrap" id="review-log-wrap"></div>
</details>
</section>
    </>
  );
}
