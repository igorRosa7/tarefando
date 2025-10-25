import React from 'react';
import { SelectButton, type SelectButtonChangeEvent } from 'primereact/selectbutton'; //ver o que faz
import { InputText } from 'primereact/inputtext';
import { ControlsContainer } from './TaskControls.styled';

interface TaskControlsProps {
  filterOptions: any[]; //array de opções de filtro passado de App.tsx
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

      <div className="filter-group">
        <SelectButton 
          value={filterStatus}
          options={filterOptions} 
          onChange={onFilterChange} 
          optionLabel="label" // Diz ao PrimeReact para usar a 'label' como texto
          optionValue="value" // Diz para usar o 'value' como o valor real
        />
      </div>

     
      <div className="search-group p-input-icon-left">
        <i className="pi pi-search" />
        <InputText 
          value={searchTerm}
          onChange={onSearchChange}
          placeholder="Buscar por título ou descrição..."
          style={{ width: '100%' }} 
        />
      </div>

    </ControlsContainer>
  );
};

export default TaskControls;