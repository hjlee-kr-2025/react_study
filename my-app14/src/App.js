import logo from './logo.svg';
import './App.css';

function Button(props) {
  return (
    <button>{props.theme}</button>
  );
}

function ThemedButton(props) {
  return (
    <Button theme={props.theme} />
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton theme={props.theme} />
    </div>
  );
}

function App(props) {
  return (
    <Toolbar theme='dark' />
  );
}

export default App;
