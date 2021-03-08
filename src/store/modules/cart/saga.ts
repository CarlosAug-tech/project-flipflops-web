import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSuccess, updateToAmountSuccess } from './actions';
import {
  CartActionTypes,
  CartState,
  IAddToCartRequest,
  IUpdateAmountReq,
} from './types';

export function* addToCart({ payload }: IAddToCartRequest) {
  const { id } = payload;
  const productExists = yield select((state: CartState) =>
    state.cart.cartItem.find((p) => p.id === id),
  );

  const currentAmount = productExists ? productExists.amountCart : 0;
  const amountCart = currentAmount + 1;

  if (productExists && amountCart > productExists.amount) {
    return;
  }

  if (productExists) {
    yield put(updateToAmountSuccess(id, amountCart));
  } else {
    const response = yield call(api.get, `/products/${id}`);
    const data = {
      ...response.data,
      amountCart: 1,
    };
    yield put(addToCartSuccess(data));
  }
}

export function* updateToAmount({ payload }: IUpdateAmountReq) {
  const { id, amountCart } = payload;

  const productExists = yield select((state: CartState) =>
    state.cart.cartItem.find((p) => p.id === id),
  );

  if (amountCart <= 0 || amountCart > productExists.amount) {
    return;
  }

  yield put(updateToAmountSuccess(id, amountCart));
}

export default all([
  takeLatest(CartActionTypes.ADD_CART_REQUEST, addToCart),
  takeLatest(CartActionTypes.UPD_AMOUNT_REQUEST, updateToAmount),
]);
