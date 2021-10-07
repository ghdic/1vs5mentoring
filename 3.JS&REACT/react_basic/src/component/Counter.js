import React, {useState} from 'react';

function Counter() {
    const [value, setValue] = useState(0)

    const increaseValue = () => {
        setValue(value + 1);
    }

    const decreaseValue = () => {
        setValue(value - 1);
    }

  return (
    <div>
        <h1>{value}</h1>
        <button onClick={increaseValue}>증가</button>
        <button onClick={decreaseValue}>감소</button>
    </div>
  );
}

export default Counter;