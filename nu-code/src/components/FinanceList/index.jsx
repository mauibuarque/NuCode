import FinanceCard from "../FinanceCard";

const FinanceList = ({ setCardList }) => {
  const getCardList = JSON.parse(localStorage.getItem("cardList"));

  return (
    <>
      <h2>Resumo Financeiro</h2>

      {getCardList?.length > 0 ? (
        <ul>
          {getCardList?.map((card, index) => (
            <FinanceCard
              key={index}
              cardId={index}
              card={card}
              setCardList={setCardList}
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
