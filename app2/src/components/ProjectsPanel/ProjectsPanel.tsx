import { CalcitePanel } from '@esri/calcite-components-react';
import translations from '../../translations/en/global.json';
import styles from './ProjectsPanel.module.css';

function ProjectsPanel() {
  return (
    <CalcitePanel heading={translations.heading}>
      <div className={styles.content}>
        {/* Panel Content kommt hier rein */}
      </div>
    </CalcitePanel>
  );
}

export default ProjectsPanel;