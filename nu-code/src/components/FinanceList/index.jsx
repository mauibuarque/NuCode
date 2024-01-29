import style from "./style.module.css";

import FinanceCard from "../FinanceCard";

const FinanceList = ({ setCardList, formatValue }) => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  return (
    <>
      <section className={style.financeList}>
        <h2>Resumo Financeiro</h2>

        {getCardList?.length > 0 ? (
          <ul>
            {getCardList?.map((card, index) => (
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
