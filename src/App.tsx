import React from 'react';
import { Button } from './components/Button';

function App() {
  const [counter, setCounter] = React.useState<number>(0);

  const addValue = (event: React.MouseEvent) => {
    console.log(event);
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <Button onClick={addValue}>{counter}</Button>
      <Button appearance='big' onClick={addValue}>Hello</Button>
    </>
  );
}

export default App;
