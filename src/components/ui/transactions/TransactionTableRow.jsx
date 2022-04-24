// Components
import VisaIcon from "../../icons/VisaIcon";
import MasterCardIcon from "../../icons/MasterCardIcon";
import POSIcon from "../../icons/POSIcon";
import LinkIcon from "../../icons/LinkIcon";

// Helpers
import formatDate from "../../../helpers/formatDate.js";
import formatCardNumber from "../../../helpers/formatCardNumber.js";

// Styles
import classes from "../../../scss/components/ui/transactions/TransactionsTableRow.module.scss";

const TransactionTableRow = ({
  transaction: { type, status, date, method, id, amount },
}) => {
  const typeIcon = type === "pos" ? <POSIcon /> : <LinkIcon />;
  const cardIcon = method.card === "visa" ? <VisaIcon /> : <MasterCardIcon />;
  const statusText = status === 1 ? "Cobro exitoso" : "Cobro no realizado";
  const statusBadge = status === 1 ? classes.success : classes.fail;
  const formatedDate = formatDate(date).fullDate;
  const formatedCardNumber = formatCardNumber(method.cardNumber);

  return (
    <tr className={`${classes.row} ${statusBadge}`}>
      <td className={classes.type}>
        {typeIcon}
        <p>{statusText}</p>
      </td>
      <td className={classes.date}>{formatedDate}</td>
      <td className={classes.method}>
        {cardIcon}
        <p>{formatedCardNumber}</p>
      </td>
      <td className={classes.id}>{id}</td>
      <td className={classes.amount}>
        <p className={classes.paid}>${amount.paid}</p>
        {amount.taxes && (
          <p className={classes["taxes-text"]}>Deducción Bold</p>
        )}
        {amount.taxes && <p className={classes.taxes}>-${amount.taxes}</p>}
      </td>
    </tr>
  );
};

export default TransactionTableRow;
