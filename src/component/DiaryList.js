import "./DiaryList.css";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DiaryList = ({ data }) => {
  //data : 홈에서 넘어온 props -> 월별로 필터링된 일기들의 배열

  const [sortType, setSortType] = useState("latest");
  const [sortedData, setSortedData] = useState([]);

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

  useEffect(() => {
    //정렬 함수
    const compare = (a, b) => {
      // a: 일기 객체 id1, b: 일기 객체 id2
      if (sortType === "latest") {
        // 날짜의 내림차순
        return Number(b.date) - Number(a.date); //연산 결과 - 음수 or 양수
      } else {
        //oldest 오름차순
        return Number(a.date) - Number(b.date);
      }
    };
    const copyList = JSON.parse(JSON.stringify(data)); // 깊은 복사 -> 데이터에 똑같이 복사 , 번지수 다름
    //data.sort(compare); //원본의 순서가 변경된다
    copyList.sort(compare); //복사본으로 정렬
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
