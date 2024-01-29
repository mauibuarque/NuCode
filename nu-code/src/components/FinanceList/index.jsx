import style from "./style.module.css";

import { useState } from "react";

import FinanceCard from "../FinanceCard";

const FinanceList = ({ setCardList, formatValue }) => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  const [filterType, setFilterType] = useState("Todos");

  const filterCards = (type) => {
    setFilterType(type);
  };

  const filteredCardList = getCardList.filter((card) => {
    if (filterType === "Todos") {
      return true;
    }

    return card.valueType === filterType;
  });

  return (
    <>
      <section className={style.financeList}>
        <div className={style.financeListHeader}>
          <h2>Resumo Financeiro</h2>
          <div className={style.buttons}>
            <button onClick={() => filterCards("Todos")}>Todos</button>
            <button onClick={() => filterCards("Entrada")}>Entradas</button>
            <button onClick={() => filterCards("Despesa")}>Despesas</button>
          </div>
        </div>

        {filteredCardList.length > 0 ? (
          <ul className={style.cardList}>
            {filteredCardList.map((card, index) => (
              <FinanceCard
                key={index}
                card={card}
                setCardList={setCardList}
                formatValue={formatValue}
              />
            ))}
          </ul>
        ) : (
          <p>Você Ainda Não Possui Nenhum Lançamento</p>
        )}
      </section>
    </>
  );
};

export default FinanceList;
