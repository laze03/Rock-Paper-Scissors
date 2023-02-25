import "../App.css";
import Header from "../components/Header";
import Select from "../components/Select";
import ButtonRules from "../components/ButtonRules";
import Modal from "../components/Modal";
import { useContext } from "react";
import { Context } from "../Context";

function Home() {
  const { modal } = useContext(Context);
  return (
    <div className="home">
      <Header />
      <Select />
      <ButtonRules />
      {modal && <Modal />}
    </div>
  );
}

export default Home;
