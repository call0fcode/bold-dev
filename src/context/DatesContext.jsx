import { createContext, useState } from "react";

export const DatesContext = createContext();

// Helpers
import formatDate from "../helpers/formatDate.js";

// Obtain different date tags to show on the app
const now = new Date();
const today = formatDate(now).date; // 27/04/2021
const monthAndYear = formatDate(now).monthAndYear; // Septiembre 2020
const weekInterval = `Semana del ${new Date(
  now.setDate(now.getDate() - 7)
).getDate()} al ${new Date().getDate()} de ${
  formatDate(new Date()).monthLongFormat
}`;

const DatesProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState("semana");

  const dateTag =
    selectedDate === "hoy"
      ? today
      : selectedDate === "mes"
      ? monthAndYear
      : selectedDate === "semana"
      ? weekInterval
      : "";

  return (
    <DatesContext.Provider
      value={{
        selectedDate,
        setSelectedDate,
        dateTag,
      }}
    >
      {children}
    </DatesContext.Provider>
  );
};

export default DatesProvider;
