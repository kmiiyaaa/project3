import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";

function App() {
  return (
    <div className="App">
      <div>
        <Link to={"/"}>Home</Link> |<Link to={"/new"}>Write</Link> |
        <Link to={"/diary"}>Diary</Link> |<Link to={"/edit"}>Edit</Link>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit" element={<Edit />} />
        {/* <a href='new'>a태그</a> a태그로 만들면 페이지가 리랜더링 되지 않는다 */}
      </Routes>
    </div>
  );
}

export default App;
