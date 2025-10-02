import "./Button.css";

//Button 컴포넌트 props -> 버튼의 이름 text, 이벤트핸들러 onclick
const Button = ({ text, type, onClick }) => {
  //상위에서 가져다쓸때 -> text : 버튼의 이름
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  //positive -> button의 클래스이름 -> Button Button_positive

  return (
    <button
      className={["Button", `Button_${btnType}`].join(" ")}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
