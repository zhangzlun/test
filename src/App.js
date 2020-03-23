import React from 'react';
import {createBrowserHistory} from "history";
import {Router} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import Routes from "./Routes";
import theme from './theme';

const browserHistory = createBrowserHistory();

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router history={browserHistory}>
                <Routes/>
            </Router>
        </ThemeProvider>
    );
};
