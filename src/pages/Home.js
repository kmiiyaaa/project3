import Button from "../component/Button";
import Header from "../component/Header";
import Editor from "../component/Editor";
import DiaryList from "../component/DiaryList";
import { useState, useEffect, useContext } from "react";
import { getMonthRangeByDate } from "../util";
import { DiaryStateContext } from "../App";

const Home = () => {
  //const [searchParams, setSearchParams] = useSearchParams(); //값이 여러개로 들어오는 경우
  //console.log(searchParams.get("memberId")); //이 문법 알아두기 (10/1, 11:20분쯤)
  //request.getPatameter("mgmberId") 와 유사

  const data = useContext(DiaryStateContext); //App에서 보내준 data(일기들 배열) 가져오기

  const [filteredData, setFilteredData] = useState();

  const [pivotDate, setPivotDate] = useState(new Date()); //오늘 날짜 (기준 날짜)

  const headerTitle = `${pivotDate.getFullYear()}년 ${
    pivotDate.getMonth() + 1
  }월`;

  const onIncreaseMonth = () => {
    // 월 증가 이벤트 핸들러
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    //월 감소 이벤트 핸들러
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  useEffect(() => {
    if (data.length >= 1) {
      const { beginTimeStamp, endTimeStamp } = getMonthRangeByDate(pivotDate);
      setFilteredData(
        data.filter(
          (item) => beginTimeStamp <= item.date && item.date <= endTimeStamp
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [data, pivotDate]);

  const onSubmit = () => {
    alert("작성 완료!");
  };

  return (
    <div>
      <Header
        title={headerTitle}
        leftChild={<Button text={"<"} onClick={onDecreaseMonth} />}
        rightChild={<Button text={">"} onClick={onIncreaseMonth} />}
      />
      <DiaryList data={filteredData} />
    </div>
  );
};

export default Home;
