import {connect} from 'react-redux';
import ShowCouponDetail from '../components/ShowCouponDetail';
import {deleteCoupon,loadCoupons} from '../actions';



function mapStateToProps(state) {
  return {
    coupons: state.coupons
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadCoupons() {
      dispatch(loadCoupons())
    },
    deleteCoupon(coupon2BDeleted) {
      dispatch(deleteCoupon(coupon2BDeleted))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ShowCouponDetail);
