import { Provider } from "react-redux";
import Card from "../components/Card";
import store from "../store";

export default function Home() {
  return (
    <Provider store={store}>
      <Card></Card>
    </Provider>
  );
}
