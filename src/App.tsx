import React from 'react';
import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import {ThemeProvider, DefaultTheme} from "styled-components";
import usePersistedState from "./hooks/usePersistedState";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import Header from "./components/Header";


function App() {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyles/>
                <Routes toggleTheme={toggleTheme} />
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
