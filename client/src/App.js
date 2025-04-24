import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Services from './components/Services';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #00ff00;
    --background-color: #002211;
    --text-color: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }

  body {
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--background-color);
  }
`;

const GridBorder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(var(--primary-color) 1px, transparent 1px),
                    linear-gradient(90deg, var(--primary-color) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.1;
  pointer-events: none;
  z-index: -1;
`;

const MainContent = styled.main`
  padding-top: 80px;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <GridBorder />
      <Navbar />
      <MainContent>
        {/* Hero section will go here */}
        <Services />
        {/* Other sections will go here */}
      </MainContent>
    </Router>
  );
};

export default App; 