import { useState } from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';

// React Components importieren
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteButton,
  CalciteIcon,
  CalciteInput,
  CalciteLabel
} from '@esri/calcite-components-react';

interface TodoItem {
  id: number;
  text: string;
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<TodoItem[]>([]);

  const handleAddItem = (): void => {
    if (inputValue.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: inputValue
      }]);
      setInputValue('');
    }
  };

  const totalCount = items.length;

  return (
    <CalciteShell>
      {/* Panel bleibt hell */}
      <CalciteShellPanel slot="panel-start" displayMode="float" width="m">
        <CalcitePanel heading="Calcite Lernprojekt">
          <div style={{ padding: '1rem' }}>
            <h3 style={{ marginTop: 0 }}>Willkommen! 👋</h3>
            <p style={{ color: '#6e6e6e', fontSize: '0.9rem' }}>
              Dies ist deine erste Calcite App mit React & TypeScript!
            </p>
            
            <CalciteLabel>
              Neue Aufgabe hinzufügen
              <CalciteInput
                value={inputValue}
                onCalciteInputInput={(e) => setInputValue((e.target as HTMLCalciteInputElement).value)}
                placeholder="z.B. Calcite Buttons lernen..."
                onKeyDown={(e) => e.key === 'Enter' && handleAddItem()}
              />
            </CalciteLabel>

            <CalciteButton 
              appearance="solid" 
              width="full"
              onClick={handleAddItem}
              style={{ marginTop: '1rem' }}
            >
              <CalciteIcon icon="plus" slot="icon-start" />
              Hinzufügen
            </CalciteButton>

            {totalCount > 0 && (
              <div style={{ 
                marginTop: '1.5rem', 
                padding: '1rem', 
                background: '#f3f3f3',
                borderRadius: '4px'
              }}>
                <strong>Aufgaben:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {items.map(item => (
                    <div key={item.id} style={{ padding: '0.5rem 0' }}>
                      • {item.text}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CalcitePanel>
      </CalciteShellPanel>

      {/* Hauptbereich - DUNKEL mit Calcite CSS-Variable */}
      <div style={{ 
        minHeight: '100vh',
        background: 'var(--calcite-color-background)',
        padding: '2rem'
      }} className="calcite-mode-dark">
        {/* Hier ist jetzt NUR dunkler Hintergrund - kein Content */}
        <div style={{ 
          color: 'var(--calcite-color-text-1)',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Optional: Platzhalter-Text */}
          <p style={{ 
            textAlign: 'center', 
            marginTop: '20vh',
            fontSize: '1.2rem',
            opacity: 0.5
          }}>
            Hauptinhalt-Bereich (dunkel)
          </p>
        </div>
      </div>
    </CalciteShell>
  );
}

export default App;