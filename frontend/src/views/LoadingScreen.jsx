import React from 'react';

export default function LoadingScreen() {
  return (
    <>
<div className="route-loading" id="route-loading" role="status" aria-live="polite" aria-busy="true">
<div className="route-loading-card">
<span className="route-loading-spinner" aria-hidden="true"></span>
<strong id="route-loading-title">Loading workspace</strong>
</div>
</div>
    </>
  );
}
