import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";


function ShowCoupons(props) {
  var couponDiv = "";
  couponDiv = props.coupons.map((coupon) => {
    console.log(coupon._id);
    return (
      <div key={coupon._id} className="col-md-6 col-lg-4">
        <div className="coupon">
          <Link to={`/couponDetail/${coupon._id}`}>
            <div className="container">
              <div className="row">
                <div className="col-xs-7 col-xs-offset-1 text-center offer">
                  <div className="biggerText">
                    {coupon.heading}
                  </div>
                </div>
                <div className="col-xs-4 verticle">
                  <div>
                    <img
                     className="bizLogo pull-right"
                     src={coupon.bizLogo}
                     alt="">
                    </img>
                  </div><br />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Link to={`/createCoupon`}>
        <button className="buttonGen">Create Coupon</button>
      </Link>
      <div className="couponMargin">
        {couponDiv}
      </div>
   </div>
  )
}

ShowCoupons.propTypes = {
  coupons: PropTypes.array.isRequired
}

export default ShowCoupons;
