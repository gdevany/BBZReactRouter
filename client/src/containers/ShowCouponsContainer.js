import {connect} from 'react-redux';
import ShowCoupons from '../components/ShowCoupons';
import {loadCoupons, loadCouponDetail} from '../actions';

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
    loadCouponDetail(id) {
      dispatch(loadCouponDetail(id))
    }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(ShowCoupons);
