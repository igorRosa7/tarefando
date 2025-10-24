// src/Components/TaskControls/TaskControls.styles.ts
import styled from 'styled-components';

export const ControlsContainer = styled.div`
  /* Usando as variáveis do tema PrimeReact */
  background-color: var(--surface-card);
  border: 1px solid var(--surface-border);
  border-radius: 8px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
  
  display: flex;
  flex-wrap: wrap; /* Permite quebrar em telas pequenas */
  gap: 1.5rem; /* Espaço entre o filtro e a busca */
  align-items: center;

  .filter-group {
    flex-grow: 1; /* Tenta ocupar mais espaço */
  }

  .search-group {
    flex-grow: 2; /* Tenta ocupar o dobro de espaço do filtro */
    min-width: 250px; /* Garante que o campo de busca não seja esmagado */
  }
`;