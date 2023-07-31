import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { persistor, store } from "./redux/store.js";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
          <GlobalStyles />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
