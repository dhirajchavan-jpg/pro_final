import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import Workbench from './views/Workbench.jsx';
import { start } from './modules/app.js';
import './styles/base.css';
import './styles/workbench.css';
import './styles/design.css';

flushSync(() => createRoot(document.getElementById('root')).render(<Workbench />));
start();
