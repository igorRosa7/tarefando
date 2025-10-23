import styled from 'styled-components';

// Criamos SÓ UM componente exportado, baseado em um <form>
export const FormContainer = styled.form`
  /* 1. Estilos do próprio formulário */
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black; /* Sua borda de debug */

  /* --- 2. ESTILIZAÇÃO ANINHADA --- */
  /* Agora estilizamos as tags HTML que estão DENTRO do form */

  /* Estiliza os 'div' que agrupam label/input */
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: 1px solid black; /* Sua borda de debug */
  }

  /* Estiliza todos os 'label' dentro do FormContainer */
  label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #333;
  }

  /* Estiliza 'input' E 'textarea' juntos (eles têm estilos em comum) */
  input,
  textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  /* Estilos específicos que só o 'textarea' tem */
  textarea {
    resize: vertical;
    min-height: 80px;
  }

  /* Estiliza o 'button' */
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
  
  /* Para a mensagem de erro, é melhor usar uma classe */
  .error-message {
    color: #d9534f;
    font-size: 0.9rem;
    margin: -5px 0 5px 0;
  }
`;