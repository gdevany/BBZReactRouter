import {connect} from 'react-redux';
import CreateCoupon from '../components/CreateCoupon';
import {createCoupon, loadCoupons} from '../actions';


function mapStateToProps(state) {
  return {
    category: state.category,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createCoupon: (c) => {
      dispatch(createCoupon(c))
    },
    loadCoupons: () => {
      dispatch(loadCoupons())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateCoupon);
