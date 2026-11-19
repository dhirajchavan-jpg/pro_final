import React from 'react';

export default function AccountWorkspace() {
  return (
    <>
<section className="account-shell" id="account-shell" hidden>
<div className="account-intro">
<div className="account-brand">
<span className="product-mark" aria-hidden="true"></span>
<span className="product-name">
<strong>Tenderabl - Bid Evaluation</strong>
</span>
</div>
<div className="account-copy">
<span className="eyebrow">Bid evaluation</span>
<h1 id="account-title">Your tender workspace</h1>
<p id="account-subtitle">Access previous tenders or start a new evaluation.</p>
</div>
</div>
<div className="message" id="account-message" role="alert"></div>
<div className="auth-grid" id="auth-panel" hidden>
<div className="auth-card" id="register-card">
<h2>Create account</h2>
<div className="field"><label htmlFor="register-name">Name</label><input id="register-name" type="text" autoComplete="name" /></div>
<div className="field"><label htmlFor="register-email">Email</label><input id="register-email" type="email" autoComplete="email" /></div>
<div className="field"><label htmlFor="register-phone">Phone (optional)</label><input id="register-phone" type="text" autoComplete="tel" /></div>
<div className="field"><label htmlFor="register-password">Password</label><input id="register-password" type="password" autoComplete="new-password" /></div>
<button id="register-btn" type="button">Register</button>
<p className="auth-switch">Already have an account? <a href="/workbench/login">Sign in</a></p>
</div>
<div className="auth-card" id="login-card">
<h2>Sign in</h2>
<div className="field"><label htmlFor="login-username">Username</label><input id="login-username" type="text" autoComplete="username" /></div>
<div className="field"><label htmlFor="login-password">Password</label><input id="login-password" type="password" autoComplete="current-password" /></div>
<button id="login-btn" type="button">Sign in</button>
<p className="auth-note">Access is managed by your procurement administrator.</p>
</div>
</div>
<div className="dashboard-card" id="dashboard" hidden>
<div className="dashboard-head">
<div><span className="eyebrow">My workspace</span><h2 id="dashboard-title">Previous tenders</h2></div>
<div className="dashboard-actions">
<a className="secondary" href="/workbench/admin">Billing</a>
<button className="secondary" id="portfolio-toggle-btn" type="button">Portfolio overview</button>
<button id="new-tender-btn" type="button">New tender</button>
<button className="secondary" id="logout-btn" type="button">Sign out</button>
</div>
</div>
<details className="profile-settings" id="profile-settings">
<summary>Profile settings</summary>
<div className="profile-row">
<div className="field"><label htmlFor="profile-name">Name</label><input id="profile-name" type="text" autoComplete="name" /></div>
<div className="field"><label htmlFor="profile-phone">Phone</label><input id="profile-phone" type="text" autoComplete="tel" /></div>
<button className="secondary" id="save-profile-btn" type="button">Save profile</button>
</div>
</details>
<section className="portfolio-overview" id="portfolio-overview" hidden>
<div className="portfolio-intro">
<div>
<span className="live-badge">Live portfolio</span>
<h3>Procurement portfolio</h3>
<p>Monitor tender progress, bidder outcomes, and decisions requiring attention.</p>
</div>
<span className="portfolio-updated" id="portfolio-updated"></span>
</div>
<div className="portfolio-stats" aria-label="Portfolio summary">
<div><span>Active tenders</span><strong id="portfolio-active-count">0</strong><small>Visible in this workspace</small></div>
<div><span>Evaluation complete</span><strong id="portfolio-complete-count">0</strong><small>Ready for committee action</small></div>
<div><span>In progress</span><strong id="portfolio-progress-count">0</strong><small>Intake or evaluation running</small></div>
<div className="attention"><span>Needs attention</span><strong id="portfolio-attention-count">0</strong><small>Evidence or approval pending</small></div>
</div>
<div className="portfolio-toolbar">
<div className="field">
<label htmlFor="portfolio-search">Search tenders</label>
<input id="portfolio-search" type="text" placeholder="Tender name or number" />
</div>
<div className="field">
<label htmlFor="portfolio-status">Status</label>
<select id="portfolio-status">
<option value="">All statuses</option>
<option value="Complete">Complete</option>
<option value="In progress">In progress</option>
<option value="Needs attention">Needs attention</option>
</select>
</div>
<button className="secondary" id="portfolio-export-btn" type="button">Download portfolio CSV</button>
</div>
<div className="portfolio-table-wrap">
<table className="portfolio-table">
<thead>
<tr>
<th>Tender</th>
<th>Current stage</th>
<th>Bidders</th>
<th>Qualified</th>
<th>Failed</th>
<th>Review</th>
<th>Status</th>
<th>Action</th>
</tr>
</thead>
<tbody id="portfolio-table-body"></tbody>
</table>
</div>
<p className="portfolio-empty" id="portfolio-empty" hidden>No tenders match these filters.</p>
</section>
<section className="bidder-comparison" id="bidder-comparison" hidden>
<div className="comparison-breadcrumb">
<button className="secondary" id="bidder-back-btn" type="button">← Portfolio overview</button>
<span id="comparison-tender-number"></span>
</div>
<div className="comparison-hero">
<div>
<span className="live-badge">Live evaluation</span>
<h3 id="comparison-tender-title">Tender bidder comparison</h3>
<p>Technical qualification summary across all submitted bidders.</p>
</div>
<div className="comparison-meta">
<span>Evaluation status</span>
<strong id="comparison-evaluation-status">Loading evaluation</strong>
<small id="comparison-evaluation-note">Commercial bids remain restricted</small>
</div>
</div>
<div className="portfolio-stats comparison-stats" aria-label="Bidder summary">
<div><span>Total bidders</span><strong id="comparison-bidder-count">0</strong><small>Submitted bidder packages</small></div>
<div><span>Qualified</span><strong id="comparison-qualified-count">0</strong><small>Mandatory checks passed</small></div>
<div className="failed"><span>Not qualified</span><strong id="comparison-failed-count">0</strong><small>Mandatory failures recorded</small></div>
<div className="attention"><span>Needs review</span><strong id="comparison-review-count">0</strong><small>Committee decision pending</small></div>
</div>
<div className="comparison-note">
<strong>Qualification view</strong>
<p>Outcomes are based on the approved tender criteria and reviewed bidder evidence. Price information is not shown on this screen.</p>
</div>
<div className="portfolio-toolbar">
<div className="field">
<label htmlFor="bidder-search">Search bidders</label>
<input id="bidder-search" type="text" placeholder="Bidder name" />
</div>
<div className="field">
<label htmlFor="bidder-status">Outcome</label>
<select id="bidder-status">
<option value="">All outcomes</option>
<option value="Qualified">Qualified</option>
<option value="Not qualified">Not qualified</option>
<option value="Needs review">Needs review</option>
<option value="In progress">In progress</option>
<option value="Pending">Pending</option>
</select>
</div>
<button className="secondary" id="bidder-report-btn" type="button">Download comparison</button>
</div>
<div className="portfolio-table-wrap">
<table className="portfolio-table bidder-summary-table">
<thead>
<tr>
<th>Bidder</th>
<th>Checks</th>
<th>Passed</th>
<th>Failed</th>
<th>Review</th>
<th>Decisive finding</th>
<th>Outcome</th>
<th>Action</th>
</tr>
</thead>
<tbody id="bidder-table-body"></tbody>
</table>
</div>
<p className="portfolio-empty" id="bidder-empty" hidden>No bidders match these filters.</p>
<div className="criteria-comparison-head">
<div>
<h3>Qualification criteria comparison</h3>
<p>Compare every bidder against the same approved tender requirements.</p>
</div>
<span>Pass · Fail · Review</span>
</div>
<div className="portfolio-table-wrap criteria-matrix-wrap">
<table className="criteria-matrix" id="criteria-matrix"></table>
</div>
</section>
<div className="tender-list-head" id="tender-list-head">
<div><h3>Your tenders</h3><p>Continue where you left off, or edit a tender label when needed.</p></div>
<span className="tender-count" id="tender-count"></span>
</div>
<div className="project-list" id="project-list"></div>
</div>
</section>
    </>
  );
}
