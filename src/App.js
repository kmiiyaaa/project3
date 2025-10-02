import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import { useEffect, useReducer, useRef } from "react";
import { type } from "@testing-library/user-event/dist/type";

function reducer(state, action) {
  // state : 기존 일기 객체들이 들어있는 배열,  [{일기1},{일기2},...]
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
      //기존 일기들이 들어있는 배열의 맨 앞에 새로운 일기객체가 삽입
    }
    case "UPDATE": {
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? { ...action.data } : item
      );
    }
    case "DELETE": {
      return state.filter(
        (item) => String(item.id) !== String(action.targetId) //같은 id만 빼고 다른 배열 state에 넣기
      );
    }

    case "INIT": {
      return action.data;
    }

    default:
      return state;
  }
}

function App() {
  const mockData = [
    {
      id: "mock1",
      date: new Date().getTime(),
      content: "mok1 일기",
      emotionId: 1,
    },
    {
      id: "mock2",
      date: new Date().getTime(),
      content: "mok2 일기",
      emotionId: 2,
    },
    {
      id: "mock3",
      date: new Date().getTime(),
      content: "mok3 일기",
      emotionId: 3,
    },
  ];

  useEffect(() => {
    dispatch({
      type: "INIT",
      data: mockData,
    });
  }, []); //의존성 배열을 []로하면 -> 최초 마운트할 때 1번만 실행

  //const [state, setState] = useState();
  const [data, dispatch] = useReducer(reducer, []); // [] : 일기들이 여러개 들어갈 배열의 초기값
  //data -> 일기(일기 객체)들이 들어있는 배열
  // [{일기1},{일기2},...]

  const idRef = useRef(0); // 일기의 id 생성 변수, 초기값:0

  const onCreate = (date, content, emotionId) => {
    // dispatch : reducer 실행하게하는 촉발함수
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current,
        date: new Date(date).getTime(),
        content,
        emotionId,
      },
    });
    idRef.current += 1; // 글 작성 후 id값 하나씩 증가 (중복 방지)
  };

  const onUpdate = (targetId, date, content, emotionId) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: targetId, // 수정할 일기객체의 id
        date: new Date(date).getTime(), // 수정한 날짜
        content, // 수정한 일기 내용
        emotionId, //수정한 감정 이미지 번호
      },
    });
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      <div>
        <Link to={"/"}>Home</Link>|<Link to={"/new"}>Write</Link>|
        <Link to={"/diary"}>Diary</Link>|<Link to={"/edit"}>Edit</Link>
      </div>
      <hr />
      <Routes>
        {/* 해당되는 페이지랑 mapping */}
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        {/* <a href='new'>a태그</a> a태그로 만들면 페이지가 리랜더링 되지 않는다 */}
      </Routes>
    </div>
  );
}

export default App;
