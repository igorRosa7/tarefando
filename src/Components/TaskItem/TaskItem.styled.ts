import styled from 'styled-components';

// o ItemContainer aceitará uma prop $isCompleted para poder alterar seu estilo com base no status da tarefa, se for true ou false
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
  @media (max-width: 400px) {

    .task-info {
       h3 { font-size: 0.95rem; }
       p { font-size: 0.8rem; } 
    }

    .task-actions {
       gap: 0.3rem; 

     
      .p-button {
        padding: 0.4rem 0.6rem; 
        font-size: 0.75rem; 

        .p-button-label {
           display: none; 
        }
         padding: 0.4rem; 
         min-width: 2.5rem; 
      }
    }
  }
`;