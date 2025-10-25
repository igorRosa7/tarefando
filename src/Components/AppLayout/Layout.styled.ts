import styled from 'styled-components';

// Container principal que centraliza
export const LayoutWrapper = styled.div`
  max-width: 1200px; 
  margin: 2rem auto; 
  
  padding: 1rem; 
`;

export const FlexContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap; 


 
  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 1rem; 
  }
`;

// A coluna principal (direita, com a lista)
export const MainContentColumn = styled.div`
  flex: 2; 
  min-width: 300px; 

  @media (max-width: 768px) {
    flex: 1; 
    min-width: unset; 
    order: 2; 
  }
`;

// A coluna lateral (esquerda, com form/controles)
export const SidebarColumn = styled.div`
  flex: 1; 
  min-width: 250px;

  @media (max-width: 768px) {
    flex: 1; 
    min-width: unset; 
    order: 1; 
  }
`;