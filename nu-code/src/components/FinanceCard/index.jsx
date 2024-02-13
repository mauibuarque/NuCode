import style from "./style.module.css";

const FinanceCard = ({ card, cardList, setCardList, formatValue }) => {
  const { id, description, value, valueType } = card;

  const deleteCard = (cardId) => {
    const filterCardList = cardList.filter((card) => card.id !== cardId);

    setCardList(filterCardList);
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
