import styled from 'styled-components';

export const FormContainer = styled.form`
  
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    
  }

  label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #333;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
 
  button {
    padding: 12px 20px;
    background-color: #007bff;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background-color: #0056b3;
    }
  }
  
  .error-message {
    color: #d9534f;
    font-size: 0.9rem;
    margin: -5px 0 5px 0;
  }
`;