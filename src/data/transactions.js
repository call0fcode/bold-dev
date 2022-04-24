/**
 * @param {Object} type - Object with "pos" (point of sale) or "link" (payment link) and corresponding icon component
 * @param {number} status - 0 (failed) or 1 (ok)
 * @param {Date} date - Date object with transaction day and time
 * @param {Object} method - Object with icon component and card number
 * @param {number} id - Bold transaction ID
 * @param {Object} amount - An object containing the paid amount and Bold taxes
 */
class Transaction {
  constructor(type, status, date, method, id, amount) {
    this.type = type;
    this.status = status;
    this.date = date;
    this.method = method;
    this.id = id;
    this.amount = amount;
  }
}

// Sample transactions
const transactions = [
  new Transaction(
    "pos",
    1,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "mastercard",
      cardNumber: "1234 5678 0123 7711",
    },
    "GZEN23784UBV2",
    { paid: 25000, taxes: 1500 }
  ),
  new Transaction(
    "pos",
    0,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "visa",
      cardNumber: "1234 5678 0123 1523",
    },
    "GZEN23784UBV2",
    { paid: 15000, taxes: null }
  ),
  new Transaction(
    "link",
    1,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "mastercard",
      cardNumber: "1234 5678 0123 7711",
    },
    "GZEN23784UBV2",
    { paid: 25000, taxes: 1500 }
  ),
  new Transaction(
    "pos",
    1,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "mastercard",
      cardNumber: "1234 5678 0123 7711",
    },
    "GZEN23784UBV2",
    { paid: 25000, taxes: 1500 }
  ),
  new Transaction(
    "pos",
    0,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "visa",
      cardNumber: "1234 5678 0123 1523",
    },
    "GZEN23784UBV2",
    { paid: 15000, taxes: null }
  ),
  new Transaction(
    "link",
    1,
    new Date(2020, 5, 4, 17, 14, 24),
    {
      card: "mastercard",
      cardNumber: "1234 5678 0123 7711",
    },
    "GZEN23784UBV2",
    { paid: 25000, taxes: 1500 }
  ),
];

export default transactions;
