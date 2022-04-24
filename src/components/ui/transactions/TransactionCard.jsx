// Components
import VisaIcon from "../../icons/VisaIcon";
import MasterCardIcon from "../../icons/MasterCardIcon";
import POSIcon from "../../icons/POSIcon";
import LinkIcon from "../../icons/LinkIcon";

// Helpers
import formatDate from "../../../helpers/formatDate.js";
import formatCardNumber from "../../../helpers/formatCardNumber.js";

// Styles
import classes from "../../../scss/components/ui/transactions/TransactionCard.module.scss";

const TransactionCard = ({
  transaction: { type, status, date, method, id, amount },
}) => {
  const typeIcon = type === "pos" ? <POSIcon /> : <LinkIcon />;
  const cardIcon = method.card === "visa" ? <VisaIcon /> : <MasterCardIcon />;
  const statusText = status === 1 ? "Cobro exitoso" : "Cobro no realizado";
  const formatedDate = formatDate(date).date;
  const formatedTime = formatDate(date).time;
  const formatedCardNumber = formatCardNumber(method.cardNumber);

  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <div className={classes.type}>
          {typeIcon}
          <p>{statusText}</p>
        </div>
        <div className={classes.date}>
          <p>{formatedDate}</p>
          <p>{formatedTime}</p>
        </div>
      </header>
      <div className={classes.content}>
        <div className={classes.info}>
          <div className={classes.method}>
            {cardIcon}
            <p>{formatedCardNumber}</p>
          </div>
          <div className={classes.id}>
            <p>ID transacción Bold</p>
            <p>{id}</p>
          </div>
        </div>
        <div className={classes.amount}>
          <p className={classes.paid}>${amount.paid}</p>
          {amount.taxes && (
            <p className={classes["taxes-text"]}>Deducción Bold</p>
          )}
          {amount.taxes && <p className={classes.taxes}>-${amount.taxes}</p>}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
