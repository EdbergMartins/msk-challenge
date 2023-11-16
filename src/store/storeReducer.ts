// Defina a interface para o estado da store
interface StoreReducer {
  product: Array<{
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    createdAt: string;
    updatedAt: string;
    quantity: number
  }>;
}

interface Action {
  type: string;
  payload: any;
}

const initialState: StoreReducer = {
  product: [],
};

const storeReducer = (state: StoreReducer = initialState, action: Action): StoreReducer => {
  switch (action.type) {
    case 'ADICIONAR_DADO':
      const existingProductIndex = state.product.findIndex(
        (element) => element.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        const updatedProduct = { ...state.product[existingProductIndex], quantity: state.product[existingProductIndex].quantity + 1 };
        const updatedProductArray = [
          ...state.product.slice(0, existingProductIndex),
          updatedProduct,
          ...state.product.slice(existingProductIndex + 1),
        ];
        return {
          ...state,
          product: updatedProductArray,
        };
      } else {
        return {
          ...state,
          product: [...state.product, { ...action.payload, quantity: 1 }],
        };
      }
    case 'INCREMENT_PRODUCT':
      const searchProductIndex = state.product.findIndex(
        (element) => element.id === action.payload.id
      );
      const updatedProduct = { ...state.product[searchProductIndex], quantity: state.product[searchProductIndex].quantity + 1 };
      const updatedProductArray = [
        ...state.product.slice(0, searchProductIndex),
        updatedProduct,
        ...state.product.slice(searchProductIndex + 1),
      ];
      return {
        ...state,
        product: updatedProductArray,
      };
    case 'DECREMENT_PRODUCT':
      const productIndex = state.product.findIndex(
        (element) => element.id === action.payload.id
      );

      // Se o produto não for encontrado, retorna o estado atual
      if (productIndex === -1) {
        return state;
      }

      const updatedProductD = {
        ...state.product[productIndex],
        quantity: state.product[productIndex].quantity - 1,
      };

      const updatedProductArrayD =
        updatedProductD.quantity === 0
          ? [
            ...state.product.slice(0, productIndex),
            ...state.product.slice(productIndex + 1),
          ]
          : [
            ...state.product.slice(0, productIndex),
            updatedProductD,
            ...state.product.slice(productIndex + 1),
          ];

      return {
        ...state,
        product: updatedProductArrayD,
      };
    default:
      return state;
  }
};

export default storeReducer;
