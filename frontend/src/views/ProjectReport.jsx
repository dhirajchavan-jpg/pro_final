import React from 'react';

export default function ProjectReport() {
  return (
    <>
<section className="panel locked" id="step-8" aria-labelledby="step-8-title">
<div className="step-head">
<h2 id="step-8-title"><span className="step-num">Step 8</span> · Report</h2>
</div>
<p>Compare bidder outcomes, review qualification blockers, and download the final evaluation record.</p>
<span className="lock-note">Complete pending evaluations to finalize the report.</span>
<div className="report-vendor-picker">
<strong>Select bidders</strong>
<div className="report-vendor-actions">
<button className="secondary" id="select-all-report-vendors" type="button">Select all</button>
<button className="secondary" id="clear-report-vendors" type="button">Clear</button>
</div>
<div className="report-vendor-options" id="report-vendors" aria-live="polite"></div>
</div>
<div id="report-summary" aria-live="polite"></div>
<div className="report-downloads">
<button id="download-xlsx-btn">Download formatted Excel</button>
<button className="secondary" id="download-json-btn">Download JSON</button>
<button className="secondary" id="download-md-btn">Download Markdown</button>
</div>
<div className="trust-note">Review and approve the evaluation before qualification or commercial action.</div>
</section>
    </>
  );
}
