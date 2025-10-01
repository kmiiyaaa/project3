import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams(); //@PathVariabld String id 와 유사

  return (
    <div>
      <h2>Diary</h2>
      <h3>{id}번 일기</h3>
    </div>
  );
};

export default Diary;
