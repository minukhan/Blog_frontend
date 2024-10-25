import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyled";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Theme } from "@radix-ui/themes";
import RootReducer from "./redux/reducers/index.jsx";
const store = createStore(RootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <Theme>
      <App />
    </Theme>
  </Provider>
);
