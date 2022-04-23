// Components
import Header from "./components/layout/Header";
import Overview from "./components/sections/Overview";
import Table from "./components/sections/Table";

// Styles
import "./scss/components/App.module.scss";

function App() {
  return (
    <>
      <Header />
      <main>
        <Overview />
        <Table />
      </main>
    </>
  );
}

export default App;
