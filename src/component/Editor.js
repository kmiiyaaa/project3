import "./Editor.css";

//props initData : 입력/수정창에서 다르게 보여질 입력 내용
//수정 -> 기존 입력내용이 출력 되어야 한다.
//onSubnit : 작성완료 버튼 클릭시 실행되는 이벤트 핸들러 함수
const Editor = ({ initData, onSubmit }) => {
  return (
    <div className="Editor">
      <div className="eiditor_section">
        <h4>오늘의 날짜</h4>
        {/*날짜 입력창*/}
      </div>
      <div className="eiditor_section">
        <h4>오늘의 감정</h4>
        {/*감정 이미지 선택창*/}
      </div>
      <div className="eiditor_section">
        <h4>오늘의 일기</h4>
        {/*일기입력, 수정창 */}
      </div>
      <div className="eiditor_section">{/*작성 완료, 취소 버튼 */}</div>
    </div>
  );
};

export default Editor;
