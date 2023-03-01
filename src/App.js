import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='nav'>
          <img src='./logo512.png' width="60px" />
          <ul className='nev-bar'>
            <li>Pricing</li>
            <li>About</li>
            <li>Pricing</li>
          </ul>

        </nav>
      </header>
      <h1>Fun facts about React</h1>
      <ul>
        <li>React has a strong community</li>
        <li>Virtual DOM is faster than real DOM</li>
        <li>React is not a framework</li>
        <li>Keep your components small</li>
        <li>Supports Type Systems</li>
      </ul>
    </div>
  );
}

export default App;
