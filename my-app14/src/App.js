import React from 'react';
import logo from './logo.svg';
import './App.css';


const ThemeContext = React.createContext('light');

function Button(props) {
  return (
    <ThemeContext.Consumer>
      {(value) => {
        return (<button>{value}</button>);
      }}
    </ThemeContext.Consumer>
  );
}

function ThemedButton(props) {
  return (
    <Button />
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function App(props) {
  return (
    <ThemeContext.Provider value='light'>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

export default App;
