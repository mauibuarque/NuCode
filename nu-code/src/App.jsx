import "./styles/index.css";

import { useState } from "react";

import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";
import Total from "./components/Total";
import FinanceList from "./components/FinanceList";

const App = () => {
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
      <Header />

      <main>
        <section>
          <FinanceForm cardList={cardList} setCardList={setCardList} />
          <Total formatValue={formatValue} />
        </section>

        <FinanceList setCardList={setCardList} formatValue={formatValue} />
      </main>
    </>
  );
};

export default App;
