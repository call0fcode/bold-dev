// Components
import TransactionCard from "./TransactionCard";

// Styles
import classes from "../../../scss/components/ui/transactions/TransactionsCards.module.scss";

const TransactionsCards = ({ transactions }) => {
  return (
    <div className={classes["cards-container"]}>
      {transactions.map((transaction, index) => {
        return <TransactionCard key={index} transaction={transaction} />;
      })}
    </div>
  );
};

export default TransactionsCards;
