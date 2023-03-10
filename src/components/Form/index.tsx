import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";

class Form extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Adicionar um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="Tarefa"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}
export default Form;
