const FinanceForm = () => {
  return (
    <>
      <form>
        <div>
          <label>Descrição</label>
          <div>
            <input type="text" placeholder="Digite Aqui sua Descrição" />
            <p>Ex: Compra de Roupas</p>
          </div>
        </div>

        <div>
          <label>Valor (R$)</label>
          <input type="text" placeholder="1" />
        </div>

        <div>
          <label>Tipo de Valor</label>
          <select>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
        </div>

        <button>Inserir valor</button>
      </form>
    </>
  );
};

export default FinanceForm;
