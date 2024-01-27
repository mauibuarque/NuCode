import FinanceCard from "../FinanceCard";

const FinanceList = () => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  return (
    <>
      <h2>Resumo Financeiro</h2>

      {getCardList?.length > 0 ? (
        <ul>
          {getCardList?.map((card, index) => (
            <FinanceCard key={index} card={card} />
          ))}
        </ul>
      ) : (
        <p>Você Ainda Não Possui Nenhum Lançamento</p>
      )}
    </>
  );
};

export default FinanceList;
