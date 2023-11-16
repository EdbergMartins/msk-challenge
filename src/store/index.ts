// store/index.ts
import { createStore, combineReducers } from 'redux';
import storeReducer from './storeReducer';
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  storeReducer, cartReducer // Certifique-se de que o nome corresponde ao seu reducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
