import "../App.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Battle from "../components/Battle";
import ButtonRules from "../components/ButtonRules";
import Modal from "../components/Modal";
import { useContext } from "react";
import { Context } from "../Context";

function Result() {
  const { modal } = useContext(Context);

  return (
    <div className="result">
      <Header />
      <Battle />
      <ButtonRules />
      {modal && <Modal />}
    </div>
  );
}

export default Result;
