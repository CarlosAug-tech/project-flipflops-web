import {
  CartActionTypes,
  CartData,
  IAddToCartFailure,
  IAddToCartRequest,
  IAddToCartSuccess,
  IBuySuccess,
  IRemoveCartSuccess,
  IUpdateAmountReq,
  IUpdateAmountSuccess,
} from './types';

export function addToCartRequest(id: string): IAddToCartRequest {
  return {
    type: CartActionTypes.ADD_CART_REQUEST,
    payload: { id },
  };
}

export function addToCartSuccess(data: CartData): IAddToCartSuccess {
  return {
    type: CartActionTypes.ADD_CART_SUCCESS,
    payload: { data },
  };
}

export function updateToAmountReq(
  id: string,
  amountCart: number,
): IUpdateAmountReq {
  return {
    type: CartActionTypes.UPD_AMOUNT_REQUEST,
    payload: {
      id,
      amountCart,
    },
  };
}

export function updateToAmountSuccess(
  id: string,
  amountCart: number,
): IUpdateAmountSuccess {
  return {
    type: CartActionTypes.UPD_AMOUNT_SUCCESS,
    payload: {
      id,
      amountCart,
    },
  };
}

export function removetToCart(id: string): IRemoveCartSuccess {
  return {
    type: CartActionTypes.REMOVE_CART_SUCCESS,
    payload: { id },
  };
}

export function buySuccess(): IBuySuccess {
  return {
    type: CartActionTypes.BUY_SUCCESS,
  };
}

export function addToCartFailure(): IAddToCartFailure {
  return {
    type: CartActionTypes.ADD_CART_FAILURE,
  };
}
