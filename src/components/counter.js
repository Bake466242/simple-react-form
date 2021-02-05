import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
    return(
        <>
        <h2>You clicked the button {Math.abs(count)} times</h2>
        <button onClick={() => setCount(count +1)}>+1</button>
        <button onClick={() => setCount(0)}>RESET</button>
        <button onClick={() => setCount(count -1)}>-1</button>
        </>
    )

}
export default Counter