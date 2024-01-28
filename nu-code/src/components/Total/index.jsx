const Total = ({ formatValue }) => {
  const getTotalValue = () => {
    const getCardList = JSON.parse(localStorage.getItem("cardList"));

    const totalValue = getCardList.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0
    );

    return totalValue;
  };

  return (
    <>
      <div>
        <h2>Valor Total:</h2>
        <p>{formatValue(getTotalValue())}</p>
      </div>

      <p>O Valor se Refere ao Saldo</p>
    </>
  );
};

export default Total;
