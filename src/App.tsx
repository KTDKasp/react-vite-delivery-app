import React from 'react';

import { Button } from './components/Button';
import { Input } from './components/Input';

function App() {
  const [counter, setCounter] = React.useState<number>(0);

  const addValue = (event: React.MouseEvent) => {
    console.log(event);
    setCounter((prev) => prev + 1);
  };

  return (
    <>
      <Button onClick={addValue}>{counter}</Button>
      <Button appearance='big'>Hello</Button>
      <Input placeholder='Email'/>


    </>
  );
}

export default App;
