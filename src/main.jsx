import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <GlobalStyles />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
