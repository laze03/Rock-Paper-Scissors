import "../App.css";
import rules from "../images/image-rules-bonus.svg";
import close from "../images/icon-close.svg";
import { useContext } from "react";
import { Context } from "../Context";

export default function Modal() {
  const { modal, setModal } = useContext(Context);

  return (
    <div className="modalBackground">
      <div className="modal">
        <div className="header">
          <h1>RULES</h1>
          <button
            className="close up"
            type="button"
            onClick={() => {
              setModal(!modal);
            }}
          >
            <img src={close}></img>
          </button>
        </div>

        <img src={rules}></img>
        <button
          className="close down"
          type="button"
          onClick={() => {
            setModal(!modal);
          }}
        >
          <img src={close}></img>
        </button>
      </div>
    </div>
  );
}
