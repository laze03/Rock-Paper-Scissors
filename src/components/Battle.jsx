import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";

import "../App.css";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export default function Battle() {
  const { score, setScore, choice } = useContext(Context);

  const l = ["scissors", " paper", "rock", "lizard", "spock"];

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const HouseChoice = function () {
    let houseChoice = l[Math.floor(Math.random() * 5)];
    return (
      <img className={houseChoice + " icon"} src={eval(houseChoice)}></img>
    );
  };

  const result = function (choice, houseChoice) {
    return "WIN";
  };

  const handleClick = function () {
    setScore(score + 1);
  };

  return (
    <div className=" battle">
      <div className="choices">
        <div className="myChoice choice">
          <p>YOU PICKED</p>
          <img className={choice + " icon"} src={eval(choice)}></img>
        </div>
        <div className="houseChoice choice">
          <p>THE HOUSE PICKED</p>
          <HouseChoice />
        </div>
      </div>
      <div className="decision">
        <h1>{"YOU " + result()}</h1>
        <Link to="/Rock-Paper-Scissors">PLAY AGAIN</Link>
      </div>
    </div>
  );
}
