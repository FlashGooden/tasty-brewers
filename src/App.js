import React from 'react';
import './App.scss';
import theme from './theme'
import AppWrapper from './AppWrapper'
import { ThemeProvider, CSSReset } from "@chakra-ui/core";




function App() {
  return (
    <div className="App">
      <ThemeProvider >
          <CSSReset theme={theme}/>
          <AppWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;

