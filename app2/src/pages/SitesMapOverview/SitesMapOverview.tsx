import React from 'react';
import { CalciteShell, CalciteShellPanel } from '@esri/calcite-components-react';
import ProjectsPanel from '../../components/ProjectsPanel/ProjectsPanel';
import styles from './SitesMapOverview.module.css';

const SitesMapOverview: React.FC = () => {
  return (
    <div className={styles.projectsMapContainer}>
      <CalciteShell>
        {/* Linkes Panel mit ProjectsPanel */}
        <CalciteShellPanel 
          slot="panel-start" 
          position="start" 
          width="l"
          displayMode="float"
        >
          <ProjectsPanel />
        </CalciteShellPanel>
        
        {/* Hauptbereich für die Karte */}
        <div className={styles.mapContainer}>
          <div className={styles.mapPlaceholder}>
            <h2>Karten-Bereich</h2>
            <p>Hier wird die interaktive Karte angezeigt</p>
          </div>
        </div>
      </CalciteShell>
    </div>
  );
};

export default SitesMapOverview;
