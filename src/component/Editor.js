import { useState } from "react";
import "./Editor.css";
import { getFomattedDate } from "../util";

//props initData : 입력/수정창에서 다르게 보여질 입력 내용
//수정 -> 기존 입력내용이 출력 되어야 한다.
//onSubnit : 작성완료 버튼 클릭시 실행되는 이벤트 핸들러 함수
const Editor = ({ initData, onSubmit }) => {
  //   const [date, setDate] = useState();
  //   const [emotion, setEmotion] = useState(3);
  //   const [content, setContent] = useState();

  const [state, setState] = useState({
    date: getFomattedDate(new Date()),
    emotionId: 3,
    contnet: "",
  });

  const handleChangeDate = (e) => {
    setState({
      //state 객체 내의 날짜 속성값 변경하기
      ...state, //객체를 분리
      date: e.tartget.value, // 그중에 필요한 date만 찾아서 바꾸기
    });
  };

  const handleChangeContent = (e) => {
    setState({
      //state 객체 내의 content 성값 변경하기
      ...state, //객체를 분리
      content: e.tartget.value,
    });
  };

  return (
    <div className="Editor">
      <div className="eiditor_section">
        <h4>오늘의 날짜</h4>
        {/*날짜 입력창*/}
        <div>
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="eiditor_section">
        <h4>오늘의 감정</h4>
        {/*감정 이미지 선택창*/}
      </div>
      <div className="eiditor_section">
        <h4>오늘의 일기</h4>
        {/*일기입력, 수정창 */}
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          ></textarea>
        </div>
      </div>
      <div className="eiditor_section">{/*작성 완료, 취소 버튼 */}</div>
    </div>
  );
};

export default Editor;
