import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Calendar from "./component/Calendar";
import Homepage from "./component/Homepage";
function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{" "}
          <Link to="/calendar">Create</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
