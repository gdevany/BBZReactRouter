export function loadCoupons() {
  return function(dispatch) {
    dispatch({
      type: "LOAD_COUPONS",
      method: "GET"
    });
    fetch("/coupons")
    .then((response) => {
      return response.json();
    }).then((coupons) => {
      console.log('loadCoupons complete');
      dispatch(couponsLoaded(coupons))
    })
  }
}

export function couponsLoaded(coupons) {
  return {
    type: "COUPONS_LOADED",
    value: coupons
  }
}

export function loadCouponDetail(id) {
  console.log('in loadCouponDetail');
  return function(dispatch) {
    dispatch({
      type: "LOAD_COUPON_DETAIL",
      method: "GET"
    });
    fetch("/coupons/" + id)
    .then((response) => {
      return response.json();
    }).then((couponDetail) => {
      dispatch(CouponDetailLoaded(couponDetail))
    })
  }
}

export function CouponDetailLoaded(couponDetail) {
  return {
    type: "COUPON_DETAIL_LOADED",
    value: couponDetail
  }
}

export function createCoupon(c) {
  console.log(`in createcoupon: ${c.bizName}`);
  return function (dispatch) {
    fetch("/coupons", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(c)
    })
    .then(() => dispatch(loadCoupons()))
  };
}

export function deleteCoupon(coupon2BDeleted) {
  console.log(coupon2BDeleted);
  return function (dispatch) {
    fetch("/coupons/" + coupon2BDeleted._id, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
    })
    // .then(response => {
    //   return response.json()
    // })
    // .then(() => dispatch(loadCoupons()));
  };
}
