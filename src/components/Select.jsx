import { Link } from "react-router-dom";
import "../App.css";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export default function Select() {
  return (
    <div className="select">
      <Link
        to="/result"
        className="scissors icon 1"
        onClick={() => props.setChoice("scissors")}
      >
        <img src={scissors} />
      </Link>

      <Link
        to="/result"
        className="paper icon 2"
        onClick={() => props.setChoice("paper")}
      >
        <img src={paper} />
      </Link>

      <Link
        to="/result"
        className="rock icon 3"
        onClick={() => props.setChoice("rock")}
      >
        <img src={rock} />
      </Link>

      <Link
        to="/result"
        className="lizard icon 4"
        onClick={() => props.setChoice("lizard")}
      >
        <img src={lizard} />
      </Link>

      <Link
        to="/result"
        className="spock icon 5 "
        onClick={() => props.setChoice("spock")}
      >
        <img src={spock} />
      </Link>
    </div>
  );
}
