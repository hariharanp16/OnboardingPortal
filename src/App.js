import { RouterProvider } from "react-router-dom";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import router from "./routes/routes";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
