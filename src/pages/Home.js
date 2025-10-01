import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //값이 여러개로 들어오는 경우
  console.log(searchParams.get("memberId")); //이 문법 알아두기 (10/1, 11:20분쯤)
  //request.getPatameter("mgmberId") 와 유시

  return (
    <div>
      <h2>HOME</h2>
    </div>
  );
};

export default Home;
