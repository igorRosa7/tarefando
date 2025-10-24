// src/Components/TaskControls/TaskControls.tsx
import React from 'react';

// 1. Imports do PrimeReact
import { SelectButton, type SelectButtonChangeEvent } from 'primereact/selectbutton';
import { InputText } from 'primereact/inputtext';

// 2. Importe o estilo
import { ControlsContainer } from './TaskControls.styled';

// 3. Defina as props (o "contrato") que o App.tsx deve seguir
interface TaskControlsProps {
  filterOptions: any[]; // As opções (Todas, Pendentes, etc.)
  filterStatus: string;
  onFilterChange: (e: SelectButtonChangeEvent) => void;
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TaskControls: React.FC<TaskControlsProps> = ({
  filterOptions,
  filterStatus,
  onFilterChange,
  searchTerm,
  onSearchChange
}) => {
  return (
    <ControlsContainer>
      
      {/* 4. O Filtro */}
      <div className="filter-group">
        <SelectButton 
          value={filterStatus} 
          options={filterOptions} 
          onChange={onFilterChange} 
          optionLabel="label" // Diz ao PrimeReact para usar a 'label' como texto
          optionValue="value" // Diz para usar o 'value' como o valor real
        />
      </div>

      {/* 5. A Busca */}
      <div className="search-group p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Buscar por título ou descrição..."
          style={{ width: '100%' }} // Faz o input preencher o 'search-group'
        />
      </div>

    </ControlsContainer>
  );
};

export default TaskControls;