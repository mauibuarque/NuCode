const FinanceCard = ({ cardId, card, setCardList }) => {
  const { description, value, valueType } = card;

  const formatValue = (price) => {
    const opts = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, opts);
  };

  const deleteCard = (cardId) => {
    const getCardList = JSON.parse(localStorage.getItem("cardList"));

    const filterCardList = getCardList.filter(
      (card, index) => index !== cardId
    );

    setCardList(filterCardList);

    const newCardList = filterCardList;

    localStorage.setItem("cardList", JSON.stringify(newCardList));
  };

  return (
    <>
      <div>
        <h3>{description}</h3>
        <p>{formatValue(Number(value))}</p>
      </div>

      <div>
        <p>{valueType}</p>
        <button onClick={() => deleteCard(cardId)}>Excluir</button>
      </div>
    </>
  );
};

export default FinanceCard;
