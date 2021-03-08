import { produce } from 'immer';
import { WritableDraft } from 'immer/dist/internal';

import { InitialStateProps, CartActions, CartActionTypes } from './types';

const INITIAL_STATE: InitialStateProps = {
  cartItem: [],
  success: false,
};

export default function cart(state = INITIAL_STATE, action: CartActions) {
  return produce(state, (draft: WritableDraft<InitialStateProps>) => {
    switch (action.type) {
      case CartActionTypes.ADD_CART_SUCCESS: {
        draft.cartItem.push(action.payload.data);
        draft.success = false;
        break;
      }
      case CartActionTypes.UPD_AMOUNT_SUCCESS: {
        const productIndex = draft.cartItem.findIndex(
          (product) => product.id === action.payload.id,
        );

        if (productIndex >= 0) {
          draft.cartItem[productIndex].amountCart = Number(
            action.payload.amountCart,
          );
        }
        break;
      }
      case CartActionTypes.REMOVE_CART_SUCCESS: {
        const productIndex = draft.cartItem.findIndex(
          (p) => p.id === action.payload.id,
        );

        if (productIndex >= 0) {
          draft.cartItem.splice(productIndex, 1);
        }

        break;
      }
      case CartActionTypes.BUY_SUCCESS: {
        draft.cartItem.length = 0;
        break;
      }
      default: {
        return state;
      }
    }
  });
}
