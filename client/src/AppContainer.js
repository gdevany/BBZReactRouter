import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadCoupons} from './actions';

function mapDispatchToProps(dispatch) {
  return {
    loadCoupons() {
      dispatch(loadCoupons())
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
