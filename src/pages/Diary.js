import { useNavigate, useParams } from "react-router-dom";
import useDiary from "../hooks/useDiary";
import Header from "../component/Header";
import Button from "../component/Button";
import { getFormattedDate } from "../util";
import Viewer from "../component/Viewer";

const Diary = () => {
  const { id } = useParams(); //@PathVariabld String id 와 유사
  const data = useDiary(id); //유저가 클릭한 글의 id와 일치하는 일기 객체

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goEdit = () => {
    navigate(`/edit/${id}`);
  };

  if (data) {
    //false -> data -> undefined
    const { date, emotionId, content } = data; // data.date , data.content
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div>
        <Header
          title={title}
          leftChild={<Button text={"< 뒤로가기"} onClick={goBack} />}
          rightChild={<Button text={"수정하기"} onClick={goEdit} />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  } else {
    return <div>일기를 불러오는 중입니다...</div>;
  }
};

export default Diary;
