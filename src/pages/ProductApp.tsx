import { Provider } from "react-redux";
import { store } from "../redux/store";
import Products from "../components/ProductList";


export default function ProductsList() {

  return (
     <Provider store={store}>
      <Products />
    </Provider>
  );
}
