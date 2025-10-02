import "./DiaryList.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
];

const DiaryList = ({ data = [] }) => {
  //data : 홈에서 넘어온 props -> 월별로 필터링된 일기들의 배열

  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]); //정렬한 결과가 저장될 일기 배열

  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const onClickNew = () => {
    navigate("/new"); // new페이지로 이동 , 버튼에 하이퍼링크 걸기
  };

  useEffect(() => {
    //정렬 함수
    const compare = (a, b) => {
      //a->일기객체 id1, b->일기객체 id2
      if (sortType === "latest") {
        //날짜의 내림차순
        return Number(b.date) - Number(a.date); //연산결과->음수 or 양수
      } else {
        //"oldest" 날짜의 오름차순
        return Number(a.date) - Number(b.date);
      }
    };

    const copyList = JSON.parse(JSON.stringify(data)); //깊은 복사->data 복사본 생성
    //data.sort(compare); //원본 순서가 변경
    copyList.sort(compare);
    setSortedData(copyList);
  }, [data, sortType]);

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
            text={"새 일기 쓰기"}
            type={"positive"}
            onClick={onClickNew}
          />
        </div>
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
