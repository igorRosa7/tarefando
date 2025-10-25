import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin-top: 1.5rem; 
  padding: 1rem;
  background-color: var(--surface-card); 
  border: 1px solid var(--surface-border); 
  border-radius: 8px; 
  max-width: 400px;
  max-height: 400px;
  margin-left: auto;
  margin-right: auto;

  h4 { /* Estilo para o título */
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
    color: var(--text-color-secondary);
    font-weight: 500; 
  }
  @media (max-width: 768px) { 
    display: none; 
  }
`;