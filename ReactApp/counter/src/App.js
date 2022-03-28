import { useState } from 'react';
import Button from './Button';
import Count from './Count';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0)
  function adder(){
    setCounter(counter + 1)
  }
  function subtracter(){
    setCounter(counter -1)
  }

  function reset(){
    setCounter(0)
  }

  return (
    <div className="App">
      <Count count={counter}/>
      <Button name="Adder" myclicker={adder}/>
      <Button name="Subtract" myclicker={subtracter}/>
      <Button name="reset" myclicker={reset}/>
    </div>
  );
}

export default App;
