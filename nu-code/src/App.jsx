import "./styles/index.css";

import { useState } from "react";

import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  if (!getCardList) {
    localStorage.setItem("cardList", JSON.stringify([]));
  }

  const [cardList, setCardList] = useState([]);

  return (
    <>
      <Header />
      <Main cardList={cardList} setCardList={setCardList} />
    </>
  );
};

export default App;
