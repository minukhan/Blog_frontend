import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyled";
import { createStore } from "redux";
import { Provider } from "react-redux";
import RootReducer from "./store/reducers/Index.jsx";

const store = createStore(RootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
