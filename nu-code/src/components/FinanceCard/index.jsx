import style from "./style.module.css";

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
      <div className={style.card}>
        <div
          className={
            valueType === "Despesa"
              ? `${style.cardColor} ${style.cardColorOutflow}`
              : style.cardColor
          }
        >
          <span></span>
        </div>
        <section className={style.cardSection}>
          <div className={style.cardTitle}>
            <h3>{description}</h3>
            <p>{formatValue(value)}</p>
          </div>

          <div className={style.cardType}>
            <p>{valueType}</p>
            <button onClick={() => deleteCard(id)}>Excluir</button>
          </div>
        </section>
      </div>
    </>
  );
};

export default FinanceCard;
