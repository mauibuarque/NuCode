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

  return (
    <>
      <Header />

      <main>
        <section>
          <FinanceForm cardList={cardList} setCardList={setCardList} />
          <Total />
        </section>

        <FinanceList setCardList={setCardList} />
      </main>
    </>
  );
};

export default App;
