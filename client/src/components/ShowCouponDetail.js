import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



function ShowCouponDetail(props) {
  window.scroll(0,0);
  const couponID = props.match.params.id;
  const coupon = props.coupons.find(c => c._id === couponID) || {};

  const cantDelete = () => {
    alert("You can't delete this coupon because it's permanent. Try deleting one of the test coupons, or try creating your own coupon, then delete it.");
  };

  const deleteButton = (coupon2Delete) => {
    return (
      <button
        className="bizLogo buttonDelete float-right"
        onClick={(e) => {
          e.preventDefault();
          console.log(coupon2Delete.notDeletable);
          if (!coupon2Delete.notDeletable) {
            props.deleteCoupon(coupon2Delete);
            props.loadCoupons();
            alert("Coupon successfully deleted");
          } else {
            cantDelete();
          }
          props.history.push("/");
        }}>DELETE COUPON
        </button>
    );
  };

  return (
    <div
      key={coupon._id}
      className="col-md-8 offset-md-2 col-lg-6 offset-lg-3 couponMargin">
      <div className="text-center">
        <Link to={"/"}>
          <button className="backButton">back</button>
        </Link>
      </div>
      <div className="coupon">
        <div className="container">
          <div className="row">
            <div className="col-7 text-center offer">
              <div className="">Buy One</div>
              <div className="biggerText">{coupon.heading}</div>
              <div className="">Get One</div>
              <div className="bigText">Free</div>
            </div>
            <div className="col-5 verticle">
              <div>
                <img
                  className="bizLogo float-right"
                  src={coupon.bizLogo}
                  alt="">
                </img>
              </div><br />
              <div>
                {deleteButton(coupon)}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-center margTop">
              <address>
                <strong>{coupon.bizName}</strong><br />
                {coupon.streetAndNum}{" "}
                {coupon.city}{" "}<br />
                <strong>{coupon.zip}</strong><br />
                <small>{coupon.bizPhone}</small>
              </address>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div>{"* "}{coupon.couponDesc}{" *"}</div>
            <div>{"* "}{coupon.restrictions}</div>
            <div>Coupon ID:{" "}{coupon._id}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

ShowCouponDetail.propTypes = {
  coupons: PropTypes.array.isRequired,
  deleteCoupon: PropTypes.func.isRequired,
  loadCoupons: PropTypes.func.isRequired
};

export default ShowCouponDetail;
