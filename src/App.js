
import './App.css';
import Main from './Components/Main';
import Success from './Components/Success';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello There</h1>
        <h1>We Are Glint</h1>
        <Success />
      </header>
      <Main />
    </div>
  );
}

export default App;
