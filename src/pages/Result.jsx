import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Battle from "../components/Battle";
import ButtonRules from "../components/ButtonRules";
import { useContext } from "react";
import { Context } from "../Context";

function Result(props) {
  const { choice } = useContext(Context);
  return (
    <div className="result">
      <Header />
      <Battle />
      <ButtonRules />
    </div>
  );
}

export default Result;
