import React from 'react';

export default function TenderSetup() {
  return (
    <>
<section className="panel tender-create" id="step-1" aria-labelledby="step-1-title">
<div className="tender-create-heading">
<span className="step-num">Step 1</span>
<h2 id="step-1-title">Create tender evaluation</h2>
</div>
<div className="tender-create-grid">
<section className="tender-create-card" aria-labelledby="tender-upload-title">
<h3 id="tender-upload-title">Upload tender package</h3>
<label className="tender-upload-zone" htmlFor="tender-file">
<span className="tender-file-icon" aria-hidden="true"></span>
<strong>Upload tender package</strong>
<span>PDF or ZIP</span>
<span className="tender-file-button">Choose file</span>
<input className="visually-hidden" type="file" id="tender-file" accept=".pdf,.zip" />
</label>
</section>
<section className="tender-create-card analysis-setup" aria-labelledby="analysis-setup-title">
<h3 id="analysis-setup-title">Analysis setup</h3>
<div className="analysis-schema">
<span className="analysis-schema-icon" aria-hidden="true"></span>
<span>
<strong id="schema-mode-label">Standard tender fields</strong>
<small id="schema-count">Loading fields…</small>
</span>
</div>
<button className="text-action" id="schema-setup-tab" type="button" aria-expanded="false" aria-controls="schema-setup-panel">Use custom fields</button>
<label className="policy-switch" htmlFor="policy-audit-toggle">
<span>
<strong>BHEL policy compliance audit</strong>
<small>Purchase and Works policy</small>
</span>
<span className="optional-badge">Optional</span>
<input type="checkbox" id="policy-audit-toggle" defaultChecked />
</label>
</section>
</div>
<div className="setup-panel schema-setup" id="schema-setup-panel" aria-labelledby="schema-setup-tab" hidden>
<div className="schema-choice-head">
<div>
<strong>Evaluation fields</strong>
<p>Use the standard fields or upload an approved client-specific field definition.</p>
</div>
<span className="schema-selection" id="schema-selection">Loading standard fields…</span>
</div>
<div className="schema-input-grid">
<label className="schema-dropzone" htmlFor="field-schema-file">
<strong>Upload custom fields</strong>
<span>Choose an approved JSON field definition. Maximum size: 2 MB.</span>
<input type="file" id="field-schema-file" accept=".json,application/json" />
</label>
<div className="field">
<label htmlFor="field-schema-json">Or paste JSON</label>
<textarea id="field-schema-json" spellCheck="false" placeholder="Paste the approved field-definition JSON"></textarea>
</div>
</div>
<div className="schema-actions">
<button className="secondary" id="use-default-schema-btn" type="button">Use standard fields</button>
<button id="use-schema-json-btn" type="button">Use this JSON</button>
</div>
<div className="status-line" id="schema-status" aria-live="polite"></div>
</div>
<div className="setup-footer tender-create-footer">
<input type="hidden" id="project-id" />
<div className="setup-summary"><span>Tender package</span><strong id="selected-tender-name">No tender selected</strong></div>
<strong className="visually-hidden" id="selected-schema-name">Standard schema</strong>
<button id="create-project-btn" disabled>Create and analyze tender</button>
<button id="run-understanding-btn" hidden disabled>Analyze tender</button>
</div>
<div className="status-line" id="understand-status" aria-live="polite"></div>
</section>
    </>
  );
}
