import React from 'react';

export default function GlobalHeader() {
  return (
    <>
<header className="global-header" id="global-header" hidden>
<div className="global-header-inner">
<div className="global-brand" aria-label="Tenderabl - Bid Evaluation">
<span className="product-mark" aria-hidden="true"></span>
<strong>Tenderabl - Bid Evaluation</strong>
</div>
<div className="global-header-actions">
<span className="system-status"><span aria-hidden="true"></span>System operational</span>
<span className="reviewer-identity">
<span><small>Reviewer</small><strong id="reviewer-display">Local procurement operator</strong></span>
<span className="reviewer-avatar" id="reviewer-avatar" aria-label="Signed-in reviewer">LO</span>
</span>
<input className="visually-hidden" type="text" id="reviewer-name" autoComplete="name" aria-label="Reviewer name" />
</div>
</div>
</header>
    </>
  );
}
