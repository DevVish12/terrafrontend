/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState } from "react";

const ReservationContext = createContext(null);

export const ReservationProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [payload, setPayload] = useState({
    restaurantName: "TERRA DINE N WINE",
  });

  const openReservation = (data = {}) => {
    setPayload((prev) => ({ ...prev, ...data }));
    setIsOpen(true);
  };
  const closeReservation = () => setIsOpen(false);

  const value = useMemo(
    () => ({ isOpen, payload, openReservation, closeReservation }),
    [isOpen, payload]
  );

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
};

export const useReservation = () => {
  const ctx = useContext(ReservationContext);
  if (!ctx)
    throw new Error("useReservation must be used within ReservationProvider");
  return ctx;
};
