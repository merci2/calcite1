import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/AppRouter';
import './global.css'

// Calcite Web Components im Browser registrieren
import { defineCustomElements } from '@esri/calcite-components/dist/loader'

// aus node_modules
import '@esri/calcite-components/dist/calcite/calcite.css'

// Custom Elements definieren
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)