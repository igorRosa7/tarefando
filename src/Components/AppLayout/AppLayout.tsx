import React from 'react';
import { Panel } from 'primereact/panel';
import {
    LayoutWrapper,
    FlexContainer,
    MainContentColumn,
    SidebarColumn
} from './Layout.styled';

interface AppLayoutProps {
    mainContent: React.ReactNode; // conteúdo principal (lista/contador)
    sidebar: React.ReactNode;     // barra lateral (formulário)
}

const AppLayout: React.FC<AppLayoutProps> = ({ mainContent, sidebar }) => {
    return (
        <LayoutWrapper>
            <Panel header="Gerenciador de Tarefas">

                <FlexContainer>

                    <SidebarColumn>
                        {sidebar}
                    </SidebarColumn>

                    <MainContentColumn>
                        {mainContent}
                    </MainContentColumn>

                </FlexContainer>
            </Panel>
        </LayoutWrapper>
    );
};

export default AppLayout;