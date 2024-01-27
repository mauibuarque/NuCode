const FinanceCard = ({ card }) => {
  const { description, value, valueType } = card;

  const formatValue = (price) => {
    const opts = { style: "currency", currency: "BRL" };

    return price.toLocaleString(price, opts);
  };

  return (
    <>
      <div>
        <h3>{description}</h3>
        <p>R$ {formatValue(value)}</p>
      </div>

      <div>
        <p>{valueType}</p>
        <button>Excluir</button>
      </div>
    </>
  );
};

export default FinanceCard;
