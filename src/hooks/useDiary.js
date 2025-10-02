//custom hook (커스텀 훅 -> 사용자 정의 훅)
//id로 일기를 불러오고 해당 id가 없으면 경고창 띄우고 home으로 돌려보내는 기능의 훅

import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext); // context에서 data(일기배열) 불러오기

  const [diary, setDiary] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    data.find((item) => item.id === id); // 유저가클릭한 id와 일치하는 일기 찾아서 반환하기
    if (matchDiary) {
      //참 : 유저가 보내준 일기의 id의 일기가 존재
      setDiary(matchDiary);
    } else {
      // 유저가 보내준 일기의 id가 존재하지 않음
      alert("해당 일기가 존재하지 않습니다.");
      navigate("/");
    }
  }, [id, data]); //id,data 값 변경될때마다 useEffect 발동

  return diary; //유저가 클릭한 id에 해당하는 일기
};

export default useDiary;
