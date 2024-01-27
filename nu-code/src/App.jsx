import "./styles/index.css";
import Header from "./components/Header";
import FinanceForm from "./components/FinanceForm";

const App = () => {
  return (
    <>
      <Header />

      <main>
        <section>
          <FinanceForm />
        </section>
      </main>
    </>
  );
};

export default App;
