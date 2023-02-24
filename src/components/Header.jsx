import "../App.css";
import logo from "../images/logo-bonus.svg";

export default function Header(props) {
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="score">
        <p>SCORE</p>
        <h1>{props.score}</h1>
      </div>
    </div>
  );
}
