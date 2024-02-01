import React,{ useState } from "react";

 
export default function Counter(){
const [count,setCount]=useState(0);
 
const Decrement=()=>{
setCount(count-1);
}

const Increase=()=>{
    setCount(count+1);

}
const Reset=()=>{
    setCount(0);
}


return (
    <div className="counter-cover">
        <p className="real_count">{count}</p>
        <button className="btn" onClick={Decrement}>DECREMENT</button>
        <button className="btn" onClick={Reset}>RESET</button>
        <button className="btn" onClick={Increase}>INCREMENT</button>

    </div>
)
}
