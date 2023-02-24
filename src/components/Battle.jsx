import { Link } from "react-router-dom";
import "../App.css";
import scissors from "../images/icon-scissors.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

export default function Battle() {
  return (
    <div className=" battle">
      <img className="icon scissors 1" src={scissors} />
      <img className="icon paper 2" src={paper} />
      <img className="icon rock 3" src={rock} />
      <img className="icon lizard 4" src={lizard} />
      <img className="icon spock 5" src={spock} />
    </div>
  );
}
