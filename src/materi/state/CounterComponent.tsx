import { useState } from "react"
// update state dengan tipe number
const CounterComponent = () => {
    const [count, setCount] = useState<number>(0);
    const increment = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CounterComponent
