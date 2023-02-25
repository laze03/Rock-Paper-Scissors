import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
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

  const houseChoice = l[Math.floor(Math.random() * 5)];

  const HouseChoice = function () {
    return (
      <img className={houseChoice + " icon"} src={eval(houseChoice)}></img>
    );
  };

  const result = function (choice, houseChoice) {
    if (
      (choice == "scissors") &
        (houseChoice == "paper" || houseChoice == "lizard") ||
      (choice == "paper") & (houseChoice == "rock" || houseChoice == "spock") ||
      (choice == "rock") &
        (houseChoice == "lizard" || houseChoice == "scissors") ||
      (choice == "lizard") &
        (houseChoice == "spock" || houseChoice == "paper") ||
      (choice == "spock") & (houseChoice == "scissors" || houseChoice == "rock")
    ) {
      return "WIN";
    } else if (choice == houseChoice) {
      return "DRAW";
    } else {
      return "LOSE";
    }
  };
  const updateScore = function (choice, setChoice) {
    if (
      (choice == "scissors") &
        (houseChoice == "paper" || houseChoice == "lizard") ||
      (choice == "paper") & (houseChoice == "rock" || houseChoice == "spock") ||
      (choice == "rock") &
        (houseChoice == "lizard" || houseChoice == "scissors") ||
      (choice == "lizard") &
        (houseChoice == "spock" || houseChoice == "paper") ||
      (choice == "spock") & (houseChoice == "scissors" || houseChoice == "rock")
    ) {
      setScore(score + 1);
    } else if (choice == houseChoice) {
      setScore(score);
    } else {
      setScore(score - 1);
    }
  };

  useEffect(() => {
    console.log(choice);
    console.log(houseChoice);
    updateScore(choice, houseChoice);
  }, []);

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
        <h1>{"YOU " + result(choice, houseChoice)}</h1>
        <Link to="/Rock-Paper-Scissors">PLAY AGAIN</Link>
      </div>
    </div>
  );
}
