import { useNavigate } from "react-router-dom";
import { getEmotionImgById } from "../util";
import "./DiaryItem.css";
import Button from "./Button";

const DiaryItem = ({ id, emotionId, content, date }) => {
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/diary/${id}`); //url->"/diary/5"
  };

  const goEdit = () => {
    navigate(`/edit/${id}`); //url->"/edit/5"
  };

  return (
    <div className="DiaryItem">
      <div
        onClick={goDetail}
        className={["img_section", `img_section_${emotionId}`].join(" ")}
      >
        <img alt={`emotion${emotionId}`} src={getEmotionImgById(emotionId)} />
      </div>
      <div onClick={goDetail} className="info_section">
        <div className="date_wrapper">
          {new Date(date).toLocaleDateString()}
        </div>
        <div className="content_wrapper">
          {content.slice(0, 25)}
          {/* 일기 내용 25글자까지만 출력 */}
        </div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEdit} />
      </div>
    </div>
  );
};

export default DiaryItem;
