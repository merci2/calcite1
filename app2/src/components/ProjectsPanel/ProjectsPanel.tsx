import { useState } from 'react';
import { 
  CalcitePanel, 
  CalciteInput, 
  CalciteButton,
  CalciteIcon
} from '@esri/calcite-components-react';
import styles from './ProjectsPanel.module.css';

function ProjectsPanel() {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const handleSearchChange = (event: CustomEvent) => {
    setSearchValue((event.target as HTMLCalciteInputElement).value);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <CalcitePanel heading="Projects" className={styles.panel}>
      <div className={styles.content}>
        {/* Searchbar */}
        <CalciteInput
          type="search"
          placeholder="Search by project title, type, client ..."
          value={searchValue}
          onCalciteInputInput={handleSearchChange}
          icon="search"
          className={styles.searchInput}
        />

        {/* Filter Buttons */}
        <div className={styles.filterContainer}>
          <CalciteButton
            iconStart="filter"
            kind={activeFilter === 'Filter 1' ? 'brand' : 'neutral'}
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('Filter 1')}
            className={styles.filterButton}
          >
            Filter 1
          </CalciteButton>
          
          <CalciteButton
            iconStart="filter"
            kind={activeFilter === 'Filter 2' ? 'brand' : 'neutral'}
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('Filter 2')}
            className={styles.filterButton}
          >
            Filter 2
          </CalciteButton>
          
          <CalciteButton
            iconStart="layers"
            kind={activeFilter === 'All' ? 'brand' : 'neutral'}
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('All')}
            className={styles.filterButton}
          >
            All
          </CalciteButton>
        </div>

        {/* Ausklappbare Elemente */}
        <div className={styles.accordion}>
          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Ausklappbar 1</span>
              <CalciteIcon icon="chevron-right" scale="s" />
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Ausklappbar 2</span>
              <CalciteIcon icon="chevron-right" scale="s" />
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Ausklappbar 3</span>
              <CalciteIcon icon="chevron-right" scale="s" />
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Ausklappbar 4</span>
              <CalciteIcon icon="chevron-right" scale="s" />
            </div>
          </div>

          <div className={styles.accordionItem}>
            <div className={styles.accordionHeader}>
              <span className={styles.accordionTitle}>Ausklappbar 5</span>
              <CalciteIcon icon="chevron-right" scale="s" />
            </div>
          </div>
        </div>

        {/* Trennlinie und New Button */}
        <div className={styles.separator}></div>
        <div className={styles.buttonContainer}>
          <CalciteButton
            iconStart="plus"
            kind="brand"
            width="auto"
            className={styles.newButton}
          >
            New
          </CalciteButton>
        </div>
      </div>
    </CalcitePanel>
  );
}

export default ProjectsPanel;