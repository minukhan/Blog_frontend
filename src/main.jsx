import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyle } from "./styles/GlobalStyled";
import { createStore } from "redux";
import { Provider } from "react-redux";
<<<<<<< HEAD
import RootReducer from "./store/reducers/Index.jsx";

=======
import { Theme } from "@radix-ui/themes";
import RootReducer from "./redux/reducers/index.jsx";
>>>>>>> 19628298489669a899bac11d9fdb71f38e339043
const store = createStore(RootReducer);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalStyle />
    <App />
  </Provider>
);
