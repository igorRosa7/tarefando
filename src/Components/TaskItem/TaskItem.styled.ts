import styled from 'styled-components';

// O ItemContainer aceitará uma prop $isCompleted para poder alterar seu estilo com base no status da tarefa, se for true ou false
export const ItemContainer = styled.div<{ $isCompleted: boolean }>`
/* Estilos do container (casca) */
  /* Vamos usar as variáveis do tema PrimeReact que você já usou no Counter */
  background-color: var(--surface-card); 
  border: 1px solid var(--surface-border);
  border-radius: 8px; /* Use o mesmo radius do Panel e Counter */
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transition: all 0.2s ease-in-out;

  /* Estilos baseados na prop $isCompleted */
  & {
    opacity: ${props => (props.$isCompleted ? 0.6 : 1)};
    text-decoration: ${props => (props.$isCompleted ? 'line-through' : 'none')};
  }

  /* Os estilos de layout (info e actions) continuam os mesmos */
  .task-info {
    flex-grow: 1;
    overflow: hidden;
    
    h3 {
      margin: 0 0 5px 0;
      color: var(--text-color); /* Use a variável de tema */
      word-wrap: break-word;
    }
    p {
      margin: 0 0 5px 0;
      font-size: 0.9rem;
      color: var(--text-color-secondary); /* Use a variável de tema */
      word-wrap: break-word;
    }
    span {
      font-size: 0.8rem;
      color: var(--text-color-secondary);
    }
  }

  .task-actions {
    display: flex;
    flex-shrink: 0;
    gap: 0.5rem; /* 10px é um pouco grande, 0.5rem ou 8px fica melhor com PrimeReact */

    /* * REMOVEMOS OS SELETORES .toggle-btn e .delete-btn DAQUI!
     * O PrimeReact vai cuidar das cores.
     */
  }
`;