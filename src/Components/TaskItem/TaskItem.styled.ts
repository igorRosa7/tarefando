import styled from 'styled-components';

// O ItemContainer aceitará uma prop $isCompleted para poder alterar seu estilo com base no status da tarefa, se for true ou false
export const ItemContainer = styled.div<{ $isCompleted: boolean }>`
  background-color: var(--surface-card); 
  border: 1px solid var(--surface-border);
  border-radius: 8px; 
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  transition: all 0.2s ease-in-out;


  border-left: 5px solid ${props => props.$isCompleted 
    ? 'var(--green-500)' 
    : 'var(--primary-color)'}; 

 
  & {
    opacity: ${props => (props.$isCompleted ? 0.6 : 1)};
    text-decoration: ${props => (props.$isCompleted ? 'line-through' : 'none')};
  }


  .task-info {
    flex-grow: 1;
    overflow: hidden;
    
    h3 {
      margin: 0 0 5px 0;
      color: var(--text-color); 
      word-wrap: break-word;
    }
    p {
      margin: 0 0 5px 0;
      font-size: 0.9rem;
      color: var(--text-color-secondary);
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
    gap: 0.5rem; 
  }
`;