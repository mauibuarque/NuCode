import style from "./style.module.css";

import { useState } from "react";

import FinanceForm from "../FinanceForm";
import Total from "../Total";
import FinanceList from "../FinanceList";

const Dashboard = () => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  if (!getCardList) {
    localStorage.setItem("cardList", JSON.stringify([]));
  }

  const [cardList, setCardList] = useState([]);

  const formatValue = (price) => {
    const opts = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, opts);
  };

  return (
    <>
      <main className={style.dashboard}>
        <section className={style.formSection}>
          <FinanceForm cardList={cardList} setCardList={setCardList} />
          <Total formatValue={formatValue} />
        </section>

        <FinanceList setCardList={setCardList} formatValue={formatValue} />
      </main>
    </>
  );
};

export default Dashboard;
