// store/index.ts
import { createStore, combineReducers } from 'redux';
import storeReducer from './storeReducer';

const rootReducer = combineReducers({
  storeReducer, // Certifique-se de que o nome corresponde ao seu reducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;
