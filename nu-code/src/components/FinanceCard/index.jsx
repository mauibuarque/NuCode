const FinanceCard = ({ card, setCardList, formatValue }) => {
  const { id, description, value, valueType } = card;

  const deleteCard = (cardId) => {
    const getCardList = JSON.parse(localStorage.getItem("cardList"));

    const filterCardList = getCardList.filter((card) => card.id !== cardId);

    setCardList(filterCardList);

    const newCardList = filterCardList;

    localStorage.setItem("cardList", JSON.stringify(newCardList));
  };

  return (
    <>
      <div>
        <h3>{description}</h3>
        <p>{formatValue(value)}</p>
      </div>

      <div>
        <p>{valueType}</p>
        <button onClick={() => deleteCard(id)}>Excluir</button>
      </div>
    </>
  );
};

export default FinanceCard;
