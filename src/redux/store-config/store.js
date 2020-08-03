import { createStore } from "redux";
import { ExchangeReducer } from "../reducers/ExchangeReducer";

const store = createStore(ExchangeReducer);

export { store };
