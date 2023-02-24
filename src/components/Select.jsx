import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context";
import "../App.css";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export default function Select() {
  const { setChoice } = useContext(Context);
  return (
    <div className="select">
      <Link
        to="/Rock-Paper-Scissors/result"
        className="scissors icon 1"
        onClick={() => setChoice("scissors")}
      >
        <img src={scissors} />
      </Link>

      <Link
        to="/Rock-Paper-Scissors/result"
        className="paper icon 2"
        onClick={() => setChoice("paper")}
      >
        <img src={paper} />
      </Link>

      <Link
        to="/Rock-Paper-Scissors/result"
        className="rock icon 3"
        onClick={() => setChoice("rock")}
      >
        <img src={rock} />
      </Link>

      <Link
        to="/Rock-Paper-Scissors/result"
        className="lizard icon 4"
        onClick={() => setChoice("lizard")}
      >
        <img src={lizard} />
      </Link>

      <Link
        to="/Rock-Paper-Scissors/result"
        className="spock icon 5 "
        onClick={() => setChoice("spock")}
      >
        <img src={spock} />
      </Link>
    </div>
  );
}
