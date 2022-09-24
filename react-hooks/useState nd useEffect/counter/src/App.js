import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

// We can create as many useSates as we want if we need them. The value within useState() is the initial value. We can place and object and the access to the value we need with spread notation also or just create variable useState like the example bellow
function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")

    function increment() {
        setCount(prevCount => prevCount + 1)
    }

    function decrement() {
        setCount(prevCount => prevCount - 1)
    }

    useEffect(() => {
        setColor(randomcolor())
    }, [count]) // if I life the array empty [], then the effect will run only once. What we put inside the array is what we want to determ when the effect runs, in this case is looking into the state: count

    return (
        <div>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}
// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             answer: "Yes"
//         }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

export default App
