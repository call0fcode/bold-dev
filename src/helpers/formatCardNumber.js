function formatCardNumber(cardNumber) {
  return cardNumber
    .split(" ")
    .map((block, index) => {
      if (index <= 2) {
        return "****";
      } else {
        return block;
      }
    })
    .join(" ");
}

export default formatCardNumber;
