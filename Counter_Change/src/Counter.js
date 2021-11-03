import React, { useState } from 'react'

const Counter = () => {

    const [num, setNum] = useState(0)

    const increment = () => {
        setNum(num + 1);
    }

    const decrement = () => {
        if (num > 0)

            setNum(num - 1);
        else
            alert("Sorry, Zero Limit Reached");
        setNum(0);
    }
    return (
        <>
            <div className="main_div">

                <div className="center_div">
                    <h2> Counter  Add </h2>
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <button onClick={increment}>Increment</button>
                        <button onClick={decrement}>Decrement</button>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Counter;