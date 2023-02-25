import { useContext } from "react";
import { Context } from "../Context";
import "../App.css";
import logo from "../images/logo-bonus.svg";

export default function Header() {
  const { score } = useContext(Context);
  return (
    <div className="header">
      <img className="logo" src={logo}></img>
      <div className="score">
        <p>SCORE</p>
        <h1>{score}</h1>
      </div>
    </div>
  );
}
