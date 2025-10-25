# Gerenciador de Tarefas Pessoais (React + Typescript)

Aplicação Front-end React + TypeScript para gerenciar tarefas pessoais com filtros, busca, visualização de dados e persistência local. Demo disponível na Vercel.

## 🚀 Demo Online

<img width="1160" height="941" alt="screenshot-app" src="https://github.com/user-attachments/assets/5a647cbe-d4b9-4682-9bcf-513fb11189fe" />

Você pode testar a aplicação aqui: [Link para o app](https://tarefando-gamma.vercel.app/)

## ✨ Funcionalidades

* **Adicionar Tarefas:** Formulário para criar novas tarefas com título (obrigatório) e descrição.
* **Listar Tarefas:** Exibe a lista de tarefas com título, descrição, status e data de criação.
* **Gerenciar Status:** Permite marcar tarefas como concluídas ou pendentes, com destaque visual para as concluídas.
* **Excluir Tarefas:** Botão para excluir tarefas com diálogo de confirmação.
* **Contador:** Exibe a contagem de tarefas pendentes e concluídas (atualizado em tempo real com a busca).
* **Filtros:** Permite filtrar a lista de tarefas por status (Todas, Pendentes, Concluídas).
* **Busca:** Campo para buscar tarefas por título ou descrição.
* **Persistência Local:** As tarefas são salvas no `localStorage` do navegador, mantendo os dados entre sessões.
* **Feedback Visual:** Notificações (Toasts) para adição de tarefas, erros de validação e exclusão.
* **Visualização de Dados:** Gráfico de rosca (doughnut chart) mostrando a proporção de tarefas pendentes vs. concluídas (baseado na busca atual).
* **Interface Responsiva:** Layout adaptado para funcionar em desktops e dispositivos móveis.


## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca principal para construção da interface.
* **TypeScript:** Adiciona tipagem estática e outros recursos ao JavaScript para maior robustez do código.
* **Vite:** Ferramenta de build para desenvolvimento front-end.
* **Styled Components:** Biblioteca para estilização encapsulada e dinâmica.
* **PrimeReact:** Biblioteca de componentes UI para React, utilizada para a interface e tema visual.
* **Chart.js:** Biblioteca para criação de gráficos (utilizada pelo componente Chart do PrimeReact).


## 📁 Estrutura de Pastas

└── seu-repositorio/   
    ├── public/    
    ├── src/  
    │ ├── Components/     
    │ ├── types/          
    │ ├── App.tsx        
    │ ├── main.tsx        
    │ └── index.css          
    └── package.json              

## 🔧 Configuração de ESLint

O projeto utiliza ESLint para garantir a qualidade e a consistência do código. As configurações estão definidas no arquivo `eslint.config.js` (ou similar) na raiz do projeto, utilizando conjuntos de regras recomendadas para JavaScript, TypeScript, React Hooks e Vite. Quaisquer ajustes nas regras de linting devem ser feitos neste arquivo central.

## ⚙️ Como Executar o Projeto Localmente

**Pré-requisitos:**

* Node.js (versão 18 ou superior recomendada)
* npm ou Yarn

**Passos:**

1.  **Obtenha o código:** Clone este repositório ou faça o download do ZIP.

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Tarefando
    ``` 

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse ou a porta indicada.

---
