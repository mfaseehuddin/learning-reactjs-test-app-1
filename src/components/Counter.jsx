import React, {useState} from 'react'

export default function Counter({initialCount, maxCount, step}) {
    const [count, setCount] = useState(initialCount)
    
    const changeCount = (num) => {
        setCount(count+num);
    }

    const themeColor = "#f2c2c2"

    const buttonStyle = {
        height:"50px",
        width:"50px",
        color:themeColor,
        fontSize:"2em",
        borderRadius:".5em",
        outline:"none",
        border:"3px solid" + themeColor
    }

    return (
        <div className="Counter" style={{
            height:"200px",
            width:"200px",
            backgroundColor:themeColor,
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
                <button style={buttonStyle} onClick={()=>{changeCount(step)}}  disabled={count>=maxCount}>+</button>
                <button style={buttonStyle} onClick={()=>{changeCount(-step)}} disabled={count<=0}>-</button>
            </div>
        </div>
    )
}
