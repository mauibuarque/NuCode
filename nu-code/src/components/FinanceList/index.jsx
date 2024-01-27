const FinanceList = () => {
  const list = [];

  return (
    <>
      <h2>Resumo Financeiro</h2>

      {list.length > 0 ? (
        <p>Você Ainda Não Possui Nenhum Lançamento</p>
      ) : (
        <ul></ul>
      )}
    </>
  );
};

export default FinanceList;
