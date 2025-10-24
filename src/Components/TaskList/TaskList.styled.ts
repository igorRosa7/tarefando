import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adiciona um espaço entre os TaskItems */

  .empty-list-message {
    text-align: center;
    color: #ddd;
    padding: 20px;
    background-color: 1px solid var(--surface-border);
    border-radius: 8px;
  }
`;