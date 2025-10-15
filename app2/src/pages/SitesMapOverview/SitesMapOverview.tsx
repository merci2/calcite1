import React from 'react';
import { CalciteShell, CalciteShellPanel, CalcitePanel, CalciteBlock } from '@esri/calcite-components-react';
import styles from './SitesMapOverview.module.css';

const SitesMapOverview: React.FC = () => {
  return (
    <div className={styles.projectsMapContainer}>
      <CalciteShell>
        <CalciteShellPanel slot="panel-start" position="start" resizable>
          <CalcitePanel heading="Projects">
            <CalciteBlock heading="Projektliste" expanded collapsible>
              <p>Panel-Inhalt</p>
            </CalciteBlock>
          </CalcitePanel>
        </CalciteShellPanel>
        
        <div style={{ 
          width: '100%', 
          height: '100%', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <p>Hier kommt die Karte</p>
        </div>
      </CalciteShell>
    </div>
  );
};

export default SitesMapOverview;
