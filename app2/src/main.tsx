import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

// Calcite Components laden
import { defineCustomElements } from '@esri/calcite-components/dist/loader'

// Asset Path wird automatisch gesetzt - node_modules Pfad
import '@esri/calcite-components/dist/calcite/calcite.css'

// Custom Elements definieren
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)