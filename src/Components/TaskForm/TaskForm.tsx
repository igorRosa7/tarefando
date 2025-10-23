import React, { useState } from 'react';
import { FormContainer } from './TaskForm.styled';

interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAddTask }) => {

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (title.trim() === '') {
      setError('O título é obrigatório.');
      return;
    }

    onAddTask(title, description);

    setTitle('');
    setDescription('');
    setError('');

  };
  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título*</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="O que precisa ser feito?"
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <div>
        <label htmlFor="description">Descrição</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Adicione mais detalhes..."
        />
      </div>

      <button type="submit">Adicionar Tarefa</button>

    </FormContainer>
  );
};
export default TaskForm;