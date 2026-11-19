import React from 'react';

export default function TenderReview() {
  return (
    <>
<section className="panel locked" id="step-2" aria-labelledby="step-2-title">
<div className="step-head tender-review-head">
<h2 id="step-2-title"><span className="step-num">Step 2</span> · Review tender understanding</h2>
<div className="tender-review-actions" aria-label="Tender review actions">
<button className="secondary" id="load-ledger-btn">Reload findings</button>
<button id="open-checklist-btn">Proceed to compliance audit</button>
</div>
</div>
<p>Review the extracted requirements. Items needing attention appear first; edit only where a correction is required or mark an item not applicable.</p>
<span className="lock-note">Complete Step 1 first.</span>
<div className="table-wrap" id="ledger-wrap"></div>
</section>
    </>
  );
}
