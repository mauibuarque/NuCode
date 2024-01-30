import style from "./style.module.css";

import { useState } from "react";

const FinanceForm = ({ cardList, setCardList }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  const [valueType, setValueType] = useState("Entrada");

  const addCard = ({ description, value, valueType }) => {
    let newValue = Number(value);

    if (valueType === "Despesa") {
      newValue = -newValue;
    }

    const newCard = {
      id: cardList.length,
      description,
      value: newValue,
      valueType,
    };

    setCardList([...cardList, newCard]);

    const getCardList = JSON.parse(localStorage.getItem("cardList"));

    const newCardList = [...getCardList, newCard];

    localStorage.setItem("cardList", JSON.stringify(newCardList));

    setDescription("");
    setValue(1);
    setValueType("Entrada");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if ((description, value, valueType)) {
      addCard({ description, value, valueType });
    }
  };

  return (
    <>
      <form onSubmit={(e) => onSubmit(e)} className={style.form}>
        <div className={style.formValues}>
          <label>Descrição</label>
          <div className={style.formDescription}>
            <input
              className={style.inputs}
              required
              type="text"
              placeholder="Digite Aqui sua Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p>Ex: Compra de Roupas</p>
          </div>
        </div>

        <div className={style.formValues}>
          <label>Valor (R$)</label>
          <input
            className={style.inputs}
            required
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className={style.formValues}>
          <label>Tipo de Valor</label>
          <select
            className={`${style.inputs} ${style.select}`}
            value={valueType}
            onChange={(e) => setValueType(e.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

        <button type="submit" className={style.formButton}>
          Inserir Valor
        </button>
      </form>
    </>
  );
};

export default FinanceForm;
