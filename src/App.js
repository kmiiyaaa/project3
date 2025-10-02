import "./App.css";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";
import { Routes, Route, Link } from "react-router-dom";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

function reducer(state, action) {
  //state->기존 일기객체들이 들어있는 배열
  //[{일기1},{일기2},{일기3}...]
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
      //기존 일기들이 들어있는 배열의 맨 앞에 새로운 일기객체가 삽입됨
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    }
    case "DELETE": {
      return state.filter(
        (item) => String(item.id) !== String(action.targetId)
      );
    }
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
}

export const DiaryStateContext = React.createContext();
//Context 생성
export const DiaryDispatchContext = React.createContext();
//자식 컴포넌트에 전달해줄 함수만 분리

function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const mockData = [
    {
      id: "mock1",
      date: new Date().getTime() - 1,
      content: "mock1이 쓴 일기",
      emotionId: 1,
    },
    {
      id: "mock2",
      date: new Date().getTime() - 2,
      content: "mock2이 쓴 일기",
      emotionId: 2,
    },
    {
      id: "mock3",
      date: new Date().getTime() - 3,
      content: "mock3이 쓴 일기",
      emotionId: 3,
    },
  ];

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
    setIsDataLoaded(true);
  }, []); //의존성 배열을 []로 하면->최초 마운트할때만 1번만 실행

  //const [state, setState] = useState();
  const [data, dispatch] = useReducer(reducer, []);
  //data->일기(일기객체)들이 들어있는 배열
  //data -> [{일기1},{일기2},[일기3]]
  const idRef = useRef(0); //일기의 id 생성 변수

  const onCreate = (date, content, emotionId) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1; //id 중복을 방지하는 id값 1씩 증가
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId, //수정할 일기객체의 id
        date: new Date(date).getTime(), //수정한 날짜
        content, //수정한 일기 내용
        emotionId, //수정한 이미지 선택 번호
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  //정렬 연습
  // let arr1 = [10,2,30,4];
  // arr1.sort((a, b) => b - a);
  // console.log(arr1);

  if (isDataLoaded) {
    //isDataLoaded 값이 참->data 전부 로딩 완료
    return (
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <div className="App">
            <div>
              <Link to={"/"}>홈</Link> /<Link to={"/new"}>일기쓰기</Link> /
              <Link to={"/diary"}>일기보기</Link> /
              <Link to={"/edit"}>일기수정</Link> /
            </div>
            <hr></hr>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/diary/:id" element={<Diary />} />
              <Route path="/edit" element={<Edit />} />
            </Routes>
          </div>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    );
  } else {
    return <div>데이터를 불러오는 중입니다.</div>;
  }
}

export default App;
