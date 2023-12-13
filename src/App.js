import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter (){
  return(
    <div className='count'>
      <h3>Count: </h3>
      <button>Increase</button>
    </div>
  )
}

export default App;
