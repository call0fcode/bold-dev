import { createContext, useState } from "react";

export const AmountsContext = createContext();

const AmountsProvider = ({ children }) => {
  const [totalAmount, setTotalAmount] = useState("2’345.600");

  return (
    <AmountsContext.Provider
      value={{
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </AmountsContext.Provider>
  );
};

export default AmountsProvider;
