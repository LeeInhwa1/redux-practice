// 초기 바뀔 변수 세팅
let initialState = {
  count: 0,
  id: "",
  password: "",
};

// 리듀서는 state, action 두 개의 기본 매개변수가 필요함
function reducer(state = initialState, action) {
  console.log("action", action);
  if (action.type === "INCREMENT") {
    // ...state 몇개나 state 값을 가져와 바꿀지 모르기때문에 ...state로 모든 state 정의
    return { ...state, count: state.count + action.payload.num };
  } else if (action.type === "LOGIN") {
    return {
      ...state,
      id: action.payload.id,
      password: action.payload.password,
    };
  } else if (action.type === "DECREMENT") {
    return { ...state, count: state.count - action.payload.num };
  }
  return { ...state };
}

export default reducer;
