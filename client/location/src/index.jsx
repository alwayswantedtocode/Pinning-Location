import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store, persistor } from "./redux/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { AppProvider } from "./Global Context/useContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={""} persistor={persistor}>
        <AppProvider>
          <App />
        </AppProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
