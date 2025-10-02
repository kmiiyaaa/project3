import "./DiaryList.css";
import Button from "./Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {
  //data : 홈에서 넘어온 props -> 월별로 필터링된 일기들의 배열

  const { sortType, setSortType } = useState("latest");
  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된순" },
  ];

  const onClickNew = () => {
    navigate("/new"); // new페이지로 이동 , 버튼에 하이퍼링크 걸기
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <select onChange={onChangeSortType} value={sortType}>
            {sortOptionList.map((item, idx) => (
              <option key={idx} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="right_col">
          <Button
            type={"positive"}
            text={"새 일기 쓰기"}
            onClick={onClickNew}
          />
        </div>
      </div>
    </div>
  );
};

export default DiaryList;
