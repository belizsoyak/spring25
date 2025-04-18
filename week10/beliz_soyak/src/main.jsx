import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Flow from './App.jsx';

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Flow />
  </StrictMode>,
);
