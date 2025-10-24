import styled from 'styled-components';

export const ControlsContainer = styled.div`
  
  background-color: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem; 
  align-items: center;

  .filter-group {
    flex-grow: 1; 
  }

  .search-group {
    flex-grow: 2; 
    min-width: 250px; 
    width: 100%;
    .p-inputtext { 
      padding-left: 2.5rem; 
    }
    i {
      left: 0.75rem; 
      color: var(--text-color-secondary); 
    }
  }
`;