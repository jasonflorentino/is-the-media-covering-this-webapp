import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

import App from './App';

const theme = extendTheme({
  colors: {
    white: "#fdfdfd"
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode="system" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
