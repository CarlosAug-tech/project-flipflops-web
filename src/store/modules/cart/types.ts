/**
 * Action types
 */

export enum CartActionTypes {
  ADD_CART_REQUEST = '@cart/ADD_TO_CART_REQUEST',
  ADD_CART_SUCCESS = '@cart/ADD_TO_CART_SUCCESS',
  ADD_CART_FAILURE = '@cart/ADD_TO_FAILURE',
  UPD_AMOUNT_REQUEST = '@cart/UPDATE_TO_AMOUNT_REQUEST',
  UPD_AMOUNT_SUCCESS = '@cart/UPDATE_TO_AMOUNT_SUCCESS',
  REMOVE_CART_SUCCESS = '@cart/REMOVE_TO_CART_SUCCESS',
  BUY_SUCCESS = '@cart/BUY_SUCCESS',
}

export interface IAddToCartRequest {
  type: CartActionTypes.ADD_CART_REQUEST;
  payload: {
    id: string;
  };
}

export interface IAddToCartSuccess {
  type: CartActionTypes.ADD_CART_SUCCESS;
  payload: {
    data: CartData;
  };
}

export interface IAddToCartFailure {
  type: CartActionTypes.ADD_CART_FAILURE;
}

export interface IUpdateAmountReq {
  type: CartActionTypes.UPD_AMOUNT_REQUEST;
  payload: {
    id: string;
    amountCart: number;
  };
}

export interface IUpdateAmountSuccess {
  type: CartActionTypes.UPD_AMOUNT_SUCCESS;
  payload: {
    id: string;
    amountCart: number;
  };
}

export interface IRemoveCartSuccess {
  type: CartActionTypes.REMOVE_CART_SUCCESS;
  payload: {
    id: string;
  };
}

export interface IBuySuccess {
  type: CartActionTypes.BUY_SUCCESS;
}

export type CartActions =
  | IAddToCartRequest
  | IAddToCartSuccess
  | IAddToCartFailure
  | IUpdateAmountReq
  | IUpdateAmountSuccess
  | IRemoveCartSuccess
  | IBuySuccess;

/**
 * Data types
 */

export interface CartData {
  id: string;
  name: string;
  description: string;
  price: number;
  amount: number;
  image: {
    url: string;
  };
  category: {
    name: string;
  };
  amountCart: number;
  subTotal: number;
}

/**
 * State type
 */

export interface InitialStateProps {
  cartItem: CartData[];
  success: boolean;
}

export interface CartState {
  cart: InitialStateProps;
}
