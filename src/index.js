import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';

import App from './App';
import customTheme from "./styles/theme";
import "./styles/main.scss";

const theme = extendTheme(customTheme);

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <Router>
        <Switch>
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
