import styles from './MainContent.module.css';

function MainContent() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Hauptbereich (Content Area)</h2>
        <p>Dies ist ein normales HTML <code>&lt;div&gt;</code> Element</p>
        <ul className={styles.list}>
          <li><strong>CalciteShell</strong> = Container für alles</li>
          <li><strong>CalciteShellPanel</strong> = Das Seitenpanel (links)</li>
          <li><strong>ProjectsPanel</strong> = Eigene Component mit CalcitePanel</li>
          <li><strong>Translation aus global.json</strong> = "Heading"</li>
        </ul>
      </div>
    </div>
  );
}

export default MainContent;