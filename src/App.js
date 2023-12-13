import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(33);
  const increaseCount =()=> setCount(count+1);

  // const increaseCount =()=>{
  //   const newCount = count+ 1;
  //   setCount(newCount);
  // }
  return(
    <div className='count'>
      <h3>Count: {count} </h3>
      <button onClick={increaseCount}>Increase</button>
      <button>Decrease</button>
    </div>
  )
}

export default App;
