import {
  AddProdToCart,
  SET_ORIGDATA,
  REMOVEFROMCART,
  USERCRED,
  SEARCH,
  UPDATESIGNUP,
} from "../actionTypes";

export const addProductsTocart = (payload) => ({
  type: AddProdToCart,
  payload,
});

export const setdata = (payload) => ({
  type: SET_ORIGDATA,
  payload,
});

export const removecart = (payload) => ({
  type: REMOVEFROMCART,
  payload,
});

export const UpdateCredData = (payload) => ({
  type: USERCRED,
  payload,
});

export const SearchForValue = (payload) => ({
  type: SEARCH,
  payload,
});

export const UpdateSignUp = (payload) => ({
  type: UPDATESIGNUP,
  payload,
});
