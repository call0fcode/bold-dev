// Components
import Header from "./components/layout/Header";
import Overview from "./components/sections/Overview";
import Transactions from "./components/sections/Transactions";

// Context Providers
import DatesProvider from "./context/DatesContext";
import AmountsProvider from "./context/AmountsContext";

// Styles
import "./scss/components/App.module.scss";

// Data
import transactions from "./data/transactions.js";

function App() {
  return (
    <>
      <Header />
      <DatesProvider>
        <AmountsProvider>
          <main>
            <Overview />
            <Transactions transactions={transactions} />
          </main>
        </AmountsProvider>
      </DatesProvider>
    </>
  );
}

export default App;
