import '@esri/calcite-components/dist/calcite/calcite.css';

// React Components importieren
import {
  CalciteShell,
  CalciteShellPanel
} from '@esri/calcite-components-react';

// Eigene Komponente importieren
import ProjectsPanel from './components/ProjectsPanel/ProjectsPanel';

function App() {
  return (
    <CalciteShell>
      {/* Linkes Panel mit ProjectsPanel Komponente */}
      <CalciteShellPanel slot="panel-start" displayMode="float" width="m">
        <ProjectsPanel />
      </CalciteShellPanel>

      {/* Hauptbereich - DUNKEL und LEER */}
      <div 
        className="calcite-mode-dark" 
        style={{ 
          minHeight: '100vh',
          background: 'var(--calcite-color-background)',
          padding: '2rem',
          color: 'var(--calcite-color-text-1)'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h2 style={{ marginTop: 0 }}>Hauptbereich (Content Area)</h2>
          <p>Dies ist ein normales HTML <code>&lt;div&gt;</code> Element</p>
          <ul style={{ lineHeight: 1.8 }}>
            <li><strong>CalciteShell</strong> = Container für alles</li>
            <li><strong>CalciteShellPanel</strong> = Das Seitenpanel (links)</li>
            <li><strong>ProjectsPanel</strong> = Eigene Component mit CalcitePanel</li>
            <li><strong>Translation aus global.json</strong> = "Heading"</li>
          </ul>
        </div>
      </div>
    </CalciteShell>
  );
}

export default App;