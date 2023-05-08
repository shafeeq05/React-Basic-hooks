import React from 'react';
import useCounter from '../../coustomhook/useCounter';
const Counter = () => {
    const [count,increment,decrement,reset] = useCounter()
    return (
        <div>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>      
            <button onClick={reset}>reset</button>
        </div>
    );
}

export default Counter;
