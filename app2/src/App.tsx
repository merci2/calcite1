import { useState } from 'react';
import '@esri/calcite-components/dist/calcite/calcite.css';

// React Components importieren
import {
  CalciteShell,
  CalciteShellPanel,
  CalcitePanel,
  CalciteButton,
  CalciteIcon,
  CalciteCard,
  CalciteInput,
  CalciteLabel
} from '@esri/calcite-components-react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [inputValue, setInputValue] = useState<string>('');
  const [items, setItems] = useState<TodoItem[]>([]);

  const handleAddItem = (): void => {
    if (inputValue.trim()) {
      setItems([...items, { 
        id: Date.now(), 
        text: inputValue,
        completed: false 
      }]);
      setInputValue('');
    }
  };

  const handleDeleteItem = (id: number): void => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleComplete = (id: number): void => {
    setItems(items.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;

  return (
    <CalciteShell>
      <CalciteShellPanel slot="panel-start" displayMode="float" widthScale="m">
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
                <strong>Fortschritt:</strong>
                <div style={{ marginTop: '0.5rem' }}>
                  {completedCount} von {totalCount} erledigt
                </div>
              </div>
            )}
          </div>
        </CalcitePanel>
      </CalciteShellPanel>

      <div style={{ padding: '2rem', minHeight: '100vh', background: '#fafafa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ marginTop: 0 }}>🎨 Calcite Design System</h1>
          <p style={{ color: '#6e6e6e', fontSize: '1.1rem' }}>
            Mit @esri/calcite-components-react - TypeScript ready!
          </p>
          
          <CalciteCard style={{ marginTop: '2rem' }}>
            <h3 slot="heading">Meine Lernaufgaben</h3>
            <span slot="description">
              Verwalte deine Calcite-Lernziele
            </span>
            
            <div style={{ padding: '1rem 0' }}>
              {items.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '2rem',
                  color: '#6e6e6e'
                }}>
                  <CalciteIcon 
                    icon="lightbulb" 
                    scale="l"
                    style={{ marginBottom: '1rem' }}
                  />
                  <p style={{ fontStyle: 'italic' }}>
                    Noch keine Aufgaben. Füge eine in der Sidebar hinzu!
                  </p>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {items.map(item => (
                    <div 
                      key={item.id}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '0.75rem',
                        padding: '0.75rem',
                        background: item.completed ? '#e8f4e8' : '#fff',
                        border: '1px solid #e0e0e0',
                        borderRadius: '4px',
                        transition: 'all 0.2s'
                      }}
                    >
                      <CalciteButton
                        appearance="transparent"
                        onClick={() => toggleComplete(item.id)}
                        scale="s"
                      >
                        <CalciteIcon 
                          icon={item.completed ? 'check-circle-f' : 'circle'} 
                          style={{ color: item.completed ? '#2ca02c' : '#999' }}
                        />
                      </CalciteButton>
                      
                      <span style={{ 
                        flex: 1,
                        textDecoration: item.completed ? 'line-through' : 'none',
                        color: item.completed ? '#6e6e6e' : '#000'
                      }}>
                        {item.text}
                      </span>
                      
                      <CalciteButton 
                        appearance="transparent" 
                        kind="danger"
                        onClick={() => handleDeleteItem(item.id)}
                        scale="s"
                      >
                        <CalciteIcon icon="trash" />
                      </CalciteButton>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CalciteCard>

          <div style={{ marginTop: '2rem' }}>
            <h2>Calcite Component Galerie</h2>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1rem', 
              marginTop: '1rem' 
            }}>
              <CalciteCard>
                <h3 slot="heading">Buttons</h3>
                <span slot="description">Verschiedene Button-Stile</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', padding: '0.5rem' }}>
                  <CalciteButton appearance="solid" width="full">
                    Solid Button
                  </CalciteButton>
                  <CalciteButton appearance="outline" width="full">
                    Outline Button
                  </CalciteButton>
                  <CalciteButton appearance="transparent" width="full">
                    Transparent
                  </CalciteButton>
                  <CalciteButton appearance="solid" kind="danger" width="full">
                    <CalciteIcon icon="trash" slot="icon-start" />
                    Danger Button
                  </CalciteButton>
                </div>
              </CalciteCard>

              <CalciteCard>
                <h3 slot="heading">Icons</h3>
                <span slot="description">Calcite Icon Library</span>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(5, 1fr)', 
                  gap: '1rem', 
                  padding: '1rem',
                  fontSize: '24px' 
                }}>
                  <CalciteIcon icon="home" />
                  <CalciteIcon icon="user" />
                  <CalciteIcon icon="map" />
                  <CalciteIcon icon="layer" />
                  <CalciteIcon icon="information" />
                  <CalciteIcon icon="gear" />
                  <CalciteIcon icon="hamburger" />
                  <CalciteIcon icon="search" />
                  <CalciteIcon icon="filter" />
                  <CalciteIcon icon="check" />
                </div>
              </CalciteCard>

              <CalciteCard>
                <h3 slot="heading">Input Felder</h3>
                <span slot="description">Verschiedene Input-Typen</span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0.5rem' }}>
                  <CalciteLabel>
                    Text Input
                    <CalciteInput placeholder="Gib etwas ein..." />
                  </CalciteLabel>
                  <CalciteLabel>
                    Mit Icon
                    <CalciteInput placeholder="Suchen..." icon="search" />
                  </CalciteLabel>
                  <CalciteLabel>
                    Nummer
                    <CalciteInput type="number" value="42" />
                  </CalciteLabel>
                </div>
              </CalciteCard>
            </div>
          </div>

          <div style={{ 
            marginTop: '3rem', 
            padding: '1.5rem', 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '8px',
            color: 'white'
          }}>
            <h3 style={{ marginTop: 0 }}>🚀 Richtig gemacht!</h3>
            <p>
              Diese App nutzt <strong>@esri/calcite-components-react</strong> - 
              das offizielle React-Paket mit vollständiger TypeScript-Unterstützung!
            </p>
            <p style={{ marginBottom: 0 }}>
              Keine TypeScript-Fehler mehr! 🎉
            </p>
          </div>
        </div>
      </div>
    </CalciteShell>
  );
}

export default App;