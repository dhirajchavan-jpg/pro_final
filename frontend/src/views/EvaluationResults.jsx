import React from 'react';

export default function EvaluationResults() {
  return (
    <>
<section className="panel locked" id="step-7" aria-labelledby="step-7-title">
<div className="step-head">
<h2 id="step-7-title"><span className="step-num">Step 7</span> · Results</h2>
<button className="secondary" id="load-results-btn">Refresh results</button>
</div>
<p>Qualification decision, decisive reasons, and the next procurement action for every bidder.</p>
<span className="lock-note">Complete pending evaluations to view all results.</span>
<div id="results"></div>
</section>
    </>
  );
}
