import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Adiciona um espaço entre os TaskItems */

  .empty-list-message {
    text-align: center;
    color: #777;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    border: 1px dashed #ddd; 
  }
`;