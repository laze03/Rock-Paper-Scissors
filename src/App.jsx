import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Context } from "./Context";
import "./App.css";
import Home from "./pages/Home.jsx";
import Result from "./pages/Result.jsx";

function App() {
  const [score, setScore] = useState(0);
  const [choice, setChoice] = useState(null);
  const [modal, setModal] = useState(false);
  return (
    <Router>
      <Context.Provider
        value={{ score, setScore, choice, setChoice, modal, setModal }}
      >
        <Routes>
          <Route exact path="/Rock-Paper-Scissors" element={<Home />}></Route>
          <Route
            exact
            path="/Rock-Paper-Scissors/result"
            element={<Result />}
          ></Route>
        </Routes>
      </Context.Provider>
    </Router>
  );
}

export default App;
