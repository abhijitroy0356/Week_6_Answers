import { useState, useCallback, memo } from "react";

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Use useCallback to memoize the functions
  const handleIncrement = useCallback(() => {
    setCount((count) => count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    setCount((count) => count - 1);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
  </div>
));
