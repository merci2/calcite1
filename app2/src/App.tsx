import '@esri/calcite-components/dist/calcite/calcite.css';

// React Components importieren
import {
  CalciteShell,
  CalciteShellPanel
} from '@esri/calcite-components-react';

// Eigene Komponenten importieren
import ProjectsPanel from './components/ProjectsPanel/ProjectsPanel';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <CalciteShell>
      {/* Linkes Panel */}
      <CalciteShellPanel slot="panel-start" displayMode="float" width="m">
        <ProjectsPanel />
      </CalciteShellPanel>

      {/* Hauptbereich - als eigene Komponente */}
      <div className="calcite-mode-dark">
        <MainContent />
      </div>
    </CalciteShell>
  );
}

export default App;