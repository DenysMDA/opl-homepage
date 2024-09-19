import './App.css';
import './pages/Opl'
import Opl from './pages/Opl';

import { ThemeProvider, createTheme } from '@fluentui/react';

const myTheme = createTheme({
  palette: {
    themePrimary: '#0078d4',
    themeLighterAlt: '#f3f9fd',
    themeLighter: '#d0e7f8',
    themeLight: '#a9d3f1',
    themeTertiary: '#5ca9e3',
    themeSecondary: '#1a86d6',
    themeDarkAlt: '#006cbe',
    themeDark: '#005ba1',
    themeDarker: '#004377',
    neutralLighterAlt: '#f8f8f8',
    neutralLighter: '#f4f4f4',
    neutralLight: '#eaeaea',
    neutralQuaternaryAlt: '#dadada',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c8c8',
    neutralTertiary: '#c2c2c2',
    neutralSecondary: '#858585',
    neutralPrimaryAlt: '#4b4b4b',
    neutralPrimary: '#333333',
    neutralDark: '#272727',
    black: '#1d1d1d',
    white: '#ffffff',
  },
  fonts: {
    medium: {
      fontFamily: 'Segoe UI',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Opl/>
      </div>
    </ThemeProvider>
 
  );
}

export default App;