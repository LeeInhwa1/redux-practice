import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./redux/component/Box";

function App() {
  const count = useSelector((state) => state.count); // state의 모든 값을 반환해줌
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: "123" } });
  };
  const decrement = () =>{
    dispatch({type: "DECREMENT", payload:{num:5}});
  }

  const increase = () => {
    // action은 object 형임
    // type action의 이름
    // action은 reducer.js 의 function reducer(state = initialState, action) 함수 안의 action 값으로 들어감
    dispatch({ type: "INCREMENT", payload: { num: 5 } }); // action에 payload 필요한 값을 같이 보내줌

    // setCount(count + 1);
  };
  return (
    <div>
      <h1>{id}</h1>
      <h1>{password}</h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={login}>login</button>
      <button onClick={decrement}>감소</button>
      <Box />
    </div>
  );
}

export default App;
