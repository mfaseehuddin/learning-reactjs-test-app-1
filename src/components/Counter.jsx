import React, {useState} from 'react'

export default function Counter({initialCount, maxCount, step}) {
    const [count, setCount] = useState(initialCount)
    
    const changeCount = (num) => {
        setCount(count+num);
    }

    return (
        <div className="Counter" style={{
            height:"200px",
            width:"200px",
            backgroundColor:"steelblue",
            padding:"1em",
            borderRadius:"1em",
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            color:"white"
        }}>
            <h1>Clicked: {count}</h1>
            <div>
                <button onClick={()=>{changeCount(step)}}  disabled={count>=maxCount}>+</button>
                <button onClick={()=>{changeCount(-step)}} disabled={count<=0}>-</button>
            </div>
        </div>
    )
}
