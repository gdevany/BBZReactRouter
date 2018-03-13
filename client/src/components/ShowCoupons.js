import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


function ShowCoupons(props) {
  window.scroll(0,0);
  let couponDiv = "";
  couponDiv = props.coupons.map((coupon) => {
    console.log(coupon._id);
    return (
      <div key={coupon._id} className="">
        <div className="coupon">
          <Link to={`/couponDetail/${coupon._id}`}>
            <div className="container">
              <div className="row">
                <div className="col-7 text-center offer">
                  <div className="biggerText">
                    {coupon.heading}
                  </div>
                </div>
                <div className="col-5">
                  <div>
                    <img
                      className="bizLogo float-right"
                      src={coupon.bizLogo}
                      alt="" />
                  </div><br />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Link to={`/createCoupon`}>
          <button className="buttonGen bigText">Create Coupon</button>
        </Link>
      </div>
      <div className="couponMargin col-md-8 offset-md-2 col-lg-6 offset-lg-3">
        {couponDiv}
      </div>
    </div>
  );
}

ShowCoupons.propTypes = {
  coupons: PropTypes.array.isRequired
};

export default ShowCoupons;
