// 초기 state 값 세팅
const initialState = {
  email: "yusin@naver.com",
  pw: "yusin123",
};

// ACTION 함수 정의
export const loginAction = (data) => {
  return {
    type: "LOGIN",
    data: data,
  };
};

// 리듀서 함수 정의
// 리듀서는 액션이 발동되면 현재 상태와 액션 객체를 받아온다
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        email: action.data.email,
        pw: action.data.pw,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default userReducer;
