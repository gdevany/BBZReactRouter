import {combineReducers} from "redux";

function coupons(state=[], action) {
  if (action.type === "COUPONS_LOADED"){
    return action.value;
  }
  return state;
}

function couponDetail(state={}, action) {
  if (action.type === "COUPON_DETAIL_LOADED"){
    return action.value;
  }
  return state;
}

function category(state=[], action) {
  if (action.type === "CATEGORY") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  coupons,couponDetail,category
});
export default rootReducer;
