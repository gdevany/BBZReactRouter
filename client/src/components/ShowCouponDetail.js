import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



function ShowCouponDetail(props) {
  const couponID = props.match.params.id;
  const coupon = props.coupons.find(c => c._id === couponID) || {};

  const cantDelete = () => {
    alert('You can\'t delete this coupon because it\'s permanent. Try deleting one of the test coupons, or try creating your own coupon, then delete it.');
  }

  const deleteButton = (coupon) => {
    return (
          <button
            className="bizLogo buttonDelete"
            onClick={ (e) => {
              e.preventDefault();
              console.log(coupon.notDeletable);
              if (!coupon.notDeletable) {
                props.deleteCoupon(coupon);
                props.loadCoupons();
                alert('Coupon successfully deleted');
              } else {
                cantDelete();
              };
              props.history.push("/");
            }}>DELETE COUPON
            </button>
          )
        }

  return (
    <div key={coupon._id} className="col-md-6 col-lg-4 couponMargin">
      <div className="text-center">
        <Link to={"/"}>
          <button className="backButton">back</button>
        </Link>
      </div>
     <div className="coupon">
       <div className="container">
         <div className="row">
           <div className="col-xs-7 col-xs-offset-1 text-center offer">
             <div className="">Buy One</div>
             <div className="biggerText">{coupon.heading}</div>
             <div className="">Get One</div>
             <div className="bigText">Free</div>
           </div>
           <div className="col-xs-4 verticle">
             <div>
               <img
                 className="bizLogo pull-right"
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
           <div className="col-xs-12 text-center">
             <address>
               <strong>{coupon.bizName}</strong><br />
               {coupon.streetAndNum}{" "}
               {coupon.city}{" "}<br />
               <strong>{coupon.zip}</strong><br />
               <small>{coupon.bizPhone}</small>
             </address>
           </div>
         </div>
         <div className="row text-center">
           <div>{"* "}{coupon.couponDesc}{" *"}</div>
           <div>{"* "}{coupon.restrictions}</div>
           <div>Coupon ID:{" "}{coupon._id}</div>
         </div>
       </div>
     </div>
    </div>
  )
}

ShowCouponDetail.propTypes = {
  coupons: PropTypes.array.isRequired,
  deleteCoupon: PropTypes.func.isRequired,
  loadCoupons: PropTypes.func.isRequired
}

export default ShowCouponDetail;
