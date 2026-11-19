import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import AdminDashboard from './views/AdminDashboard.jsx';
import { startAdmin } from './admin-controller.js';
import './styles/admin.css';
import './styles/design.css';

flushSync(() => createRoot(document.getElementById('root')).render(<AdminDashboard />));
startAdmin();
