import style from "./style.module.css";

import { useEffect, useState } from "react";

import FinanceForm from "../FinanceForm";
import Total from "../Total";
import FinanceList from "../FinanceList";

const Dashboard = () => {
  const getCardList = JSON.parse(localStorage.getItem("cardList")) || [];

  const [cardList, setCardList] = useState(getCardList);

  const formatValue = (price) => {
    const opts = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, opts);
  };

  useEffect(() => {
    localStorage.setItem("cardList", JSON.stringify(cardList));
  }, [cardList]);

  return (
    <>
      <main className={style.dashboard}>
        <section className={style.formSection}>
          <FinanceForm cardList={cardList} setCardList={setCardList} />
          <Total cardList={cardList} formatValue={formatValue} />
        </section>

        <FinanceList
          cardList={cardList}
          setCardList={setCardList}
          formatValue={formatValue}
        />
      </main>
    </>
  );
};

export default Dashboard;
