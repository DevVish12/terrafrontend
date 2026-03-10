import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ReservationModal from "./Components/ReservationModal.jsx";
import { ReservationProvider } from "./context/ReservationContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ReservationProvider>
        <App />
        <ReservationModal />
      </ReservationProvider>
    </Provider>
  </StrictMode>
);
