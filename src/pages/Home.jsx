import "../App.css";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonRules from "../components/ButtonRules";
import { useContext } from "react";
import { Context } from "../Context";

function Home() {
  return (
    <div className="home">
      <Header />
      <Select />
      <ButtonRules />
    </div>
  );
}

export default Home;
