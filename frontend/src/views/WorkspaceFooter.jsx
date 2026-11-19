import React from 'react';

export default function WorkspaceFooter() {
  return (
    <>
<footer className="app-footer" id="app-footer" hidden>
<div className="app-footer-inner">
<div className="app-footer-brand"><span className="product-mark" aria-hidden="true"></span><strong>Tenderabl - Bid Evaluation</strong></div>
<span>Version 1.0</span>
<nav aria-label="Footer">
<a href="/docs">Documentation</a>
<a id="footer-audit-link" href="/workbench" hidden>Audit log</a>
<span>© 2026</span>
</nav>
</div>
</footer>
    </>
  );
}
