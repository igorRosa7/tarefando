import styled from 'styled-components';

// O ItemContainer aceitará uma prop $isCompleted para poder alterar seu estilo com base no status da tarefa, se for true ou false
export const ItemContainer = styled.div<{ $isCompleted: boolean }>`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
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
    
    border-left: 5px solid ${props => (props.$isCompleted ? '#28a745' : '#007bff')};
  }

  .task-info {
    flex-grow: 1; 
    overflow: hidden; 
    
    h3 {
      margin: 0 0 5px 0;
      color: #333;
      word-wrap: break-word; 
    }
    p {
      margin: 0 0 5px 0;
      font-size: 0.9rem;
      color: #666;
      word-wrap: break-word; 
    }
    span {
      font-size: 0.8rem;
      color: #888;
    }
  }

  .task-actions {
    display: flex;
    flex-shrink: 0; 
    gap: 10px;


    button {
      padding: 8px 12px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      white-space: nowrap;
    }

    /* Classe específica para o botão de concluir/desfazer */
    .toggle-btn {
      background-color: #28a745;
      color: white;
      &:hover {
        background-color: #218838;
      }
    }

    /* Classe específica para o botão de excluir */
    .delete-btn {
      background-color: #dc3545;
      color: white;
      &:hover {
        background-color: #c82333;
      }
    }
  }
`;