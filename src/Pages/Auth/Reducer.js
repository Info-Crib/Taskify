import { useReducer } from "react"
const Reducer = (state,action)=>{
  if(action.type === "increment"){
     return {
      count: state.count + 1,
      opacity: state.opacity / 10,

     }
  }else if(action.type === "decrement"){
     return {
      count: state.count - 1,
      opacity: state.opacity / 10,
     }
  }
}

const Reduce = () => {
    const {state, dispatch} = useReducer(Reducer,{count:0,opacity:0});
    console.log(state);
    const HandleIncrement = () =>{
        dispatch({type: 'increment'})
    }
    const HandleDecrement = () =>[
        dispatch({type: 'decrement'}),
    ]
  return (
    <div>
      <h1>how to use usereduce in my react app</h1>

      <h2> value: {state}</h2>
        <button onClick={HandleIncrement}>increment</button>
        <button onClick={HandleDecrement}>decrement</button>
    </div>
  )
}

export default Reduce
