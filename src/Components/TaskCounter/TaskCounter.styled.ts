import styled from 'styled-components';

export const CounterContainer = styled.div`

  /*  'var(--surface-card)' que a variável de cor do PrimeReact para "cards". */
  background-color: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 8px; 
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem; 
  
  display: flex;
  justify-content: space-around; 
  align-items: center;
  text-align: center;

  /* classe para cada bloco (ex: Pendentes) */
  .stat-block {
    flex: 1;
  }

  /* o número (ex: "5") */
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color); 
  }

  /* o rótulo (ex: "Pendentes") */
  .stat-label {
    font-size: 0.9rem;
    color: var(--text-color-secondary); 
  }
  
  /* adiciona uma linha divisória entre os blocos */
  .stat-block:first-of-type {
    border-right: 1px solid var(--surface-border);
  }
`;