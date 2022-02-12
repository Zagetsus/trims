import React from 'react';
import {Route, Routes as ReactRoutes} from 'react-router-dom';
import RegisterTrims from "../pages/RegisterTrims";
import {Container} from "./styles";
import Header from "../components/Header";

interface Props {
    toggleTheme(): void;
}

const Routes: React.FC<Props> = ({toggleTheme}) => {
    return (
        <Container>
            <Header toggleTheme={toggleTheme} />
            <ReactRoutes>
                <Route path={'/'} element={<RegisterTrims/>}/>
            </ReactRoutes>
        </Container>
    );
};

export default Routes;
