import FinanceCard from "../FinanceCard";

const FinanceList = ({ setCardList, formatValue }) => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  return (
    <>
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
    </>
  );
};

export default FinanceList;
