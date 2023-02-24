import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonRules from "../components/ButtonRules";

function Home(props) {
  return (
    <div className="home">
      <Header score={props.count} />
      <Select />
      <ButtonRules />
    </div>
  );
}

export default Home;
