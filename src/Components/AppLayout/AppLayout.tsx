import React from 'react';
import { Panel } from 'primereact/panel'; 

interface AppLayoutProps {
  children: React.ReactNode;
}


const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div style={{ 
      maxWidth: '800px', 
      margin: '2rem auto', 
      padding: '1rem' 
    }}>
      <Panel header="Meu Gerenciador de Tarefas">
       
        {children}
        
      </Panel>
    </div>
  );
};

export default AppLayout;