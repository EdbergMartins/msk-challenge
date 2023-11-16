import { opendir } from 'fs';

// Defina a interface para o estado da store
interface CartReducer {
  open: boolean
}

interface Action {
  type: string;
  payload: any;
}

const initialState: CartReducer = {
  open: false,
};

const cartReducer = (state: CartReducer = initialState, action: Action): CartReducer => {
  switch (action.type) {
    case 'OPEN':
      return { open: true }
    case 'CLOSE':
      return { open: false }
    default:
      return state;
  }
};

export default cartReducer;
