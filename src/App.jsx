// Components
import Header from "./components/layout/Header";
import Overview from "./components/sections/Overview";
import Transactions from "./components/sections/Transactions";

// Styles
import "./scss/components/App.module.scss";

// Data
import transactions from "./data/transactions.js";

function App() {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <Transactions transactions={transactions} />
      </main>
    </>
  );
}

export default App;
