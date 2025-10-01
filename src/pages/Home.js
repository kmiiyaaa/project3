import { useSearchParams } from "react-router-dom";
import Button from "../component/Button";
import Header from "../component/Header";

const Home = () => {
  //const [searchParams, setSearchParams] = useSearchParams(); //값이 여러개로 들어오는 경우
  //console.log(searchParams.get("memberId")); //이 문법 알아두기 (10/1, 11:20분쯤)
  //request.getPatameter("mgmberId") 와 유시

  return (
    <div>
      <Header title={HOME}>
        leftChild
        {
          <Button
            type={"positive"}
            text={"긍정 버튼"}
            onClick={() => {
              alert("positive");
            }}
          />
        }
        rightChild
        {
          <Button
            type={"negative"}
            text={"부정 버튼"}
            onClick={() => {
              alert("negative");
            }}
          />
        }
      </Header>
    </div>
  );
};

export default Home;
