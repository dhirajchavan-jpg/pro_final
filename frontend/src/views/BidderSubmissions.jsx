import React from 'react';

export default function BidderSubmissions() {
  return (
    <>
<section className="panel locked" id="step-5" aria-labelledby="step-5-title">
<div className="step-head">
<h2 id="step-5-title"><span className="step-num">Step 5</span> · Bidder submissions</h2>
<button id="run-intake-btn" disabled>Process documents</button>
</div>
<p id="bid-intake-help">Add one bidder at a time. Enter the bidder name and upload one PDF or ZIP containing that bidder's complete submission. Price material is quarantined automatically before technical extraction.</p>
<span className="lock-note">Freeze the contract first.</span>
<div className="row">
<div className="field">
<label htmlFor="bidder-name">Bidder name</label>
<input type="text" id="bidder-name" placeholder="e.g. Pacific Engineers" />
</div>
<div className="field">
<label htmlFor="bid-file">Bid submission (.pdf / .zip)</label>
<input type="file" id="bid-file" accept=".pdf,.zip,application/pdf,application/zip" />
</div>
<button id="add-bid-btn">Add bidder</button>
</div>
<div className="vendor-list" id="vendor-list"></div>
<div className="status-line" id="intake-status" aria-live="polite"></div>
</section>
    </>
  );
}
