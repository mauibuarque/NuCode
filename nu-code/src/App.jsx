import "./styles/index.css";
import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";
import Total from "./components/Total";
import FinanceList from "./components/FinanceList";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <FinanceForm />
          <Total />
        </section>

        <FinanceList />
      </main>
    </>
  );
};

export default App;
