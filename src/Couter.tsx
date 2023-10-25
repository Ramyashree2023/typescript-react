import React, { useState } from 'react';

interface CounterProps {
    initialCount?: number;
}

const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
    const [count, setCount] = useState<number>(initialCount);

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;






