import { useContext } from "react";

// Components
import TransactionsTable from "../ui/transactions/TransactionsTable";
import TransactionsCards from "../ui/transactions/TransactionsCards";

// Contexts
import { DatesContext } from "../../context/DatesContext";

// Styles
import classes from "../../scss/components/sections/Transactions.module.scss";

const Transactions = ({ transactions }) => {
  const { selectedDate } = useContext(DatesContext);
  return (
    <section className={classes["transactions-container"]}>
      <header className={classes.title}>
        Tus ventas de {selectedDate === "semana" && "esta"}
        {selectedDate === "mes" && "este"} {selectedDate}
      </header>
      <TransactionsTable transactions={transactions} />
      <TransactionsCards transactions={transactions} />
      <div className={classes.overlay}></div>
    </section>
  );
};

export default Transactions;
