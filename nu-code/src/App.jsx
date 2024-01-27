import "./styles/index.css";
import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";
import Total from "./components/Total";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <FinanceForm />
          <Total />
        </section>
      </main>
    </>
  );
};

export default App;
