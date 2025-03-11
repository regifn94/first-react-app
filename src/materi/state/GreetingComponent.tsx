import { useState } from "react"
// update state dengan tipe string
const GreetingComponent = () => {

    const [greeting, setGreeting] = useState<string>("Hello!");

    const handleClick = () => {
        setGreeting("Hello World!")
    }

    return (
        <div>
            <p>{greeting}</p>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}

export default GreetingComponent
