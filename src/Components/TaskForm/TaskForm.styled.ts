import styled from 'styled-components';

export const FormContainer = styled.form`
  
  padding: 20px;
  background-color: var(--surface-section);
  border: 1px solid var(--surface-border);
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
    font-family: inherit;
    color: var(--text-color);
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid var(--surface-border);
    border-radius: 4px;
    box-sizing: border-box;
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
 
  
  
  .error-message {
    color: #d9534f;
    font-size: 0.9rem;
    margin: -5px 0 5px 0;
  }
`;