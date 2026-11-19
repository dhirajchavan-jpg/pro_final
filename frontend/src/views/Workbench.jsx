import React from 'react';
import LoadingScreen from './LoadingScreen.jsx';
import GlobalHeader from './GlobalHeader.jsx';
import AccountWorkspace from './AccountWorkspace.jsx';
import WorkflowNavigation from './WorkflowNavigation.jsx';
import WorkflowContent from './WorkflowContent.jsx';
import WorkspaceFooter from './WorkspaceFooter.jsx';

export default function Workbench() {
  return (
    <>

<LoadingScreen />
<GlobalHeader />
<AccountWorkspace />
<WorkflowNavigation />
<WorkflowContent />
<WorkspaceFooter />


    </>
  );
}
