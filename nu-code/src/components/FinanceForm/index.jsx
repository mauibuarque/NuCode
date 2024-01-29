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
        <div>
          <label>Descrição</label>
          <div>
            <input
              required
              type="text"
              placeholder="Digite Aqui sua Descrição"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <p>Ex: Compra de Roupas</p>
          </div>
        </div>

        <div>
          <label>Valor (R$)</label>
          <input
            required
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div>
          <label>Tipo de Valor</label>
          <select
            value={valueType}
            onChange={(e) => setValueType(e.target.value)}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </div>

        <button type="submit">Inserir Valor</button>
      </form>
    </>
  );
};

export default FinanceForm;
