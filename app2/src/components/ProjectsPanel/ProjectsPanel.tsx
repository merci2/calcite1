import { useState } from 'react';
import { CalcitePanel, CalciteInput } from '@esri/calcite-components-react';
import translations from '../../translations/en/global.json';
import styles from './ProjectsPanel.module.css';

function ProjectsPanel() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (e: Event) => {
    const input = e.target as HTMLCalciteInputElement;
    setSearchValue(input.value);
    console.log('Suche:', input.value);
  };

  return (
    <CalcitePanel heading={translations.heading}>
      <div className={styles.content}>
        {/* Suchleiste */}
        <CalciteInput
          placeholder="Search ..."
          icon="search"
          clearable
          value={searchValue}
          onCalciteInputInput={handleSearch}
          className={styles.searchInput}
        />
      </div>
    </CalcitePanel>
  );
}

export default ProjectsPanel;