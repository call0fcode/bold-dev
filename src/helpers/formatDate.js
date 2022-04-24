import capitalize from "./capitalizer";

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

function formatDate(date) {
  return {
    fullDate:
      [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join("/") +
      " - " +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(":"),
    date: [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join("/"),
    time: [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(":"),
    monthAndYear:
      capitalize(date.toLocaleString("default", { month: "long" })) +
      " " +
      date.getFullYear(),
    monthLongFormat: capitalize(
      date.toLocaleString("default", { month: "long" })
    ),
  };
}

export default formatDate;
