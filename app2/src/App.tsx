import '@esri/calcite-components/dist/calcite/calcite.css';

// React Components importieren
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel
} from '@esri/calcite-components-react';

function App() {
  return (
    <CalciteShell>
      {/* Linkes Panel - LEER */}
      <CalciteShellPanel slot="panel-start" displayMode="float" width="m">
        <CalcitePanel heading="CalcitePanel (heading)">
          <div style={{ padding: '1rem', color: '#6e6e6e', fontSize: '0.9rem' }}>
            <p>↑ Oben: <strong>CalcitePanel</strong> mit heading-Attribut</p>
            <p>← Links: <strong>CalciteShellPanel</strong> (slot="panel-start")</p>
            <p>→ Rechts: Hauptbereich ist ein normales <strong>&lt;div&gt;</strong></p>
          </div>
        </CalcitePanel>
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
            <li><strong>CalciteShell</strong> = Container für alles (umschließt Panel + Hauptbereich)</li>
            <li><strong>CalciteShellPanel</strong> = Das Seitenpanel (links/rechts positionierbar)</li>
            <li><strong>CalcitePanel</strong> = Komponente mit Überschrift/Header im ShellPanel</li>
            <li><strong>div mit className="calcite-mode-dark"</strong> = Aktiviert Dark Mode</li>
          </ul>
        </div>
      </div>
    </CalciteShell>
  );
}

export default App;