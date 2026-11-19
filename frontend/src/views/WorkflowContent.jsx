import React from 'react';
import TenderSetup from './TenderSetup.jsx';
import TenderReview from './TenderReview.jsx';
import ComplianceReview from './ComplianceReview.jsx';
import EvaluationChecklist from './EvaluationChecklist.jsx';
import BidderSubmissions from './BidderSubmissions.jsx';
import BidEvaluation from './BidEvaluation.jsx';
import EvaluationResults from './EvaluationResults.jsx';
import ProjectReport from './ProjectReport.jsx';
import ReviewHistory from './ReviewHistory.jsx';

export default function WorkflowContent() {
  return (
    <>
<main id="workflow-main" hidden>
<div className="message error" id="limitation-banner" role="status" hidden>
      Limited evaluation: unresolved qualification checks were excluded. Results are incomplete and require human review.
    </div>
<TenderSetup />
<TenderReview />
<ComplianceReview />
<EvaluationChecklist />
<BidderSubmissions />
<BidEvaluation />
<EvaluationResults />
<ProjectReport />
<ReviewHistory />
</main>
    </>
  );
}
