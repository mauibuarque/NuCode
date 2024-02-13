import style from "./style.module.css";

const Total = ({ cardList, formatValue }) => {
  const getTotalValue = () => {
    const totalValue = cardList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );

    return totalValue;
  };

  return (
    <>
      <section className={style.totalValueSection}>
        <div className={style.value}>
          <h2>Valor Total:</h2>
          <p>{formatValue(getTotalValue())}</p>
        </div>

        <p>O valor se refere ao saldo</p>
      </section>
    </>
  );
};

export default Total;
