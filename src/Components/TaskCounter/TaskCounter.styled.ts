import styled from 'styled-components';

export const CounterContainer = styled.div`

  background-color: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 8px; 
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem; 
  
  display: flex;
  justify-content: space-around; 
  align-items: center;
  text-align: center;

  
  .stat-block {
    flex: 1;
  }

 
  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color); 
  }

  
  .stat-label {
    font-size: 0.9rem;
    color: var(--text-color-secondary); 
  }
  
  /* adiciona uma linha divisória entre os blocos */
  .stat-block:first-of-type {
    border-right: 1px solid var(--surface-border);
  }
`;