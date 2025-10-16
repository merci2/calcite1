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

  // Style-Objekte für aktive und nicht-aktive Buttons
  const inactiveButtonStyle = {
    '--calcite-button-background-color': 'var(--calcite-color-foreground-1)',
    '--calcite-button-border-color': 'var(--calcite-color-border-2)',
    '--calcite-button-text-color': 'var(--calcite-color-text-1)',
  } as React.CSSProperties;

  const activeButtonStyle = {
    '--calcite-button-background-color': 'var(--calcite-color-brand)',
    '--calcite-button-border-color': 'transparent',
    '--calcite-button-text-color': 'var(--calcite-color-text-inverse)',
    'boxShadow': 'none',
    'outline': 'none',
    'border': 'none',
  } as React.CSSProperties;

  return (
    <CalcitePanel heading="Project Sites" className={styles.panel}>
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
            kind="neutral"
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('Filter 1')}
            className={styles.filterButton}
            style={activeFilter === 'Filter 1' ? activeButtonStyle : inactiveButtonStyle}
          >
            Filter 1
          </CalciteButton>
          
          <CalciteButton
            iconStart="filter"
            kind="neutral"
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('Filter 2')}
            className={styles.filterButton}
            style={activeFilter === 'Filter 2' ? activeButtonStyle : inactiveButtonStyle}
          >
            Filter 2
          </CalciteButton>
          
          <CalciteButton
            iconStart="layers"
            kind="neutral"
            scale="s"
            width="auto"
            onClick={() => handleFilterClick('All')}
            className={styles.filterButton}
            style={activeFilter === 'All' ? activeButtonStyle : inactiveButtonStyle}
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

          {/* New Button direkt nach dem letzten Accordion Item */}
          <div className={styles.buttonContainer}>
            <CalciteButton
              iconStart="plus"
              kind="neutral"
              scale="s"
              width="auto"
              className={styles.newButton}
              style={activeButtonStyle}
            >
              New Project Site
            </CalciteButton>
          </div>
        </div>
      </div>
    </CalcitePanel>
  );
}

export default ProjectsPanel;
