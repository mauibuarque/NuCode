import style from "./style.module.css";

import FinanceForm from "../FinanceForm";
import Total from "../Total";
import FinanceList from "../FinanceList";

const Main = ({ cardList, setCardList }) => {
  const formatValue = (price) => {
    const opts = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, opts);
  };

  return (
    <>
      <main className={style.main}>
        <section className={style.formSection}>
          <FinanceForm cardList={cardList} setCardList={setCardList} />
          <Total formatValue={formatValue} />
        </section>

        <FinanceList setCardList={setCardList} formatValue={formatValue} />
      </main>
    </>
  );
};

export default Main;
