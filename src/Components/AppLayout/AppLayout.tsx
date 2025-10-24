import React from 'react';
import { Panel } from 'primereact/panel'; 

interface AppLayoutProps {
  mainContent: React.ReactNode; // conteúdo principal (lista/contador)
  sidebar: React.ReactNode;     // barra lateral (formulário)
}

const AppLayout: React.FC<AppLayoutProps> = ({ mainContent, sidebar }) => {
  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '2rem auto', 
      padding: '1rem' 
    }}>
      <Panel header="Meu Gerenciador de Tarefas">
        
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem',
          flexWrap: 'wrap' 
        }}>
          
          {/* renderiza a sidebar (esquerda) */}
          <div style={{ 
            flex: '1', // ocupa 1/3
            minWidth: '250px'
           }}>
             {/* renderiza o que foi passado em 'sidebar' */}
            {sidebar} 
          </div>

          {/* renderiza o main content depois (direita) */}
          <div style={{ 
            flex: '2', // ocupa 2/3
            minWidth: '300px' 
          }}>
            {/* renderiza o que foi passado em 'mainContent' */}
            {mainContent}
          </div>

        </div>        
      </Panel>
    </div>
  );
};

export default AppLayout;