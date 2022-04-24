// Components
import TransactionsTable from "../ui/transactions/TransactionsTable";
import TransactionsCards from "../ui/transactions/TransactionsCards";

// Styles
import classes from "../../scss/components/sections/Transactions.module.scss";

const Transactions = ({ transactions }) => {
  return (
    <section className={classes["transactions-container"]}>
      <header className={classes.title}>Tus ventas de septiembre</header>
      <TransactionsTable transactions={transactions} />
      <TransactionsCards transactions={transactions} />
      <div className={classes.overlay}></div>
    </section>
  );
};

export default Transactions;
