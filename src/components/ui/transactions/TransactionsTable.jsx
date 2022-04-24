// Components
import TransactionTableRow from "./TransactionTableRow";

// Styles
import classes from "../../../scss/components/ui/transactions/TransactionsTable.module.scss";

const TransactionsTable = ({ transactions }) => {
  return (
    <table className={classes.table}>
      <thead className={classes.head}>
        <tr>
          <th>Transacción</th>
          <th>Fecha y hora</th>
          <th>Método de pago</th>
          <th>ID transacción Bold</th>
          <th>Monto</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => {
          return <TransactionTableRow key={index} transaction={transaction} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionsTable;
