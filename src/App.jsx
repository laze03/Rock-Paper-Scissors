import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [choice, setChoice] = useState("paper");
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home count={count} setChoice={setChoice} />}
        ></Route>
        <Route
          exact
          path="/result"
          element={<Result count={count} setCount={setCount} choice={choice} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
