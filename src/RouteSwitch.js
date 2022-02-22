import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Projects from "./components/Projects";
import Header from "./components/Header";
import Skills from "./components/Skills"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import { useState } from 'react';
import { BiSun, BiMoon } from 'react-icons/bi';

import styled from "styled-components";

function RouteSwitch() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<><Header /><About themeToggler={themeToggler} theme={theme} /></>} />
            <Route path="/projects" element={<><Header /><Projects /></>} />
            <Route path="/skills" element={<><Header /><Skills /></>} />
          </Routes>
        </>
        <Footer>
          <BiSun />
          <label className="switch" onChange={themeToggler}>
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
          <BiMoon />
        </Footer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

const Footer = styled.span`
  display: flex;
  justify-content: center;
  gap: 0.2em;
  background: transparent;
  border: none;
  width: 100vw;
  bottom: 0;
  padding-bottom: 0.2em;
  @media only screen and (max-width: 600px) {
      position relative;
      padding: 1em 0em;
  }
`

export default RouteSwitch;
