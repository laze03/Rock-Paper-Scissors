import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Battle from "../components/Battle";
import ButtonRules from "../components/ButtonRules";

function Result(props) {
  return (
    <div className="result">
      me
      <Header score={props.count} />
      <Battle setCount={props.setCount} />
      <ButtonRules />
    </div>
  );
}

export default Result;
