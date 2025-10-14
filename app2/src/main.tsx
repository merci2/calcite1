import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Calcite Components laden
import { defineCustomElements } from '@esri/calcite-components/dist/loader'
import { setAssetPath } from '@esri/calcite-components/dist/components'

// Asset Path setzen (wichtig für Icons!)
// In Production werden Assets aus /assets geladen, in Dev vom CDN
setAssetPath(
  import.meta.env.PROD 
    ? '/assets' 
    : 'https://js.arcgis.com/calcite-components/2.13.2/assets'
);

// Custom Elements definieren
defineCustomElements(window);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)