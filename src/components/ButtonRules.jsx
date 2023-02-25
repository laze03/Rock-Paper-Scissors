import "../App.css";
import { useContext } from "react";
import { Context } from "../Context";

export default function ButtonRules() {
  const { modal, setModal } = useContext(Context);
  return (
    <div className="rules">
      <button
        type="button"
        onClick={() => {
          setModal(!modal);
        }}
      >
        RULES
      </button>
    </div>
  );
}
