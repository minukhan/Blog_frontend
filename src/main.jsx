import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyled";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducers/Index.jsx";
import { Theme } from "@radix-ui/themes";
const store = createStore(RootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <Theme>
      <App />
    </Theme>
  </Provider>
);
