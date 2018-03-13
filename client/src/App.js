import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header.js";
import ShowCouponDetail from "./containers/ShowCouponDetailContainer.js";
import ShowCoupons from "./containers/ShowCouponsContainer.js";
import CreateCouponContainer from "./containers/CreateCouponContainer.js";
import {
 BrowserRouter,
 Route,
 Switch
} from "react-router-dom";

class App extends Component {

  componentDidMount() {
    this.props.loadCoupons();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="container text-center">
            <div className="headingLogo">BOGO</div>
            <div className="headingLogoMini">by zip</div>
          </div>
          <Switch>
            <Route path="/couponDetail/:id" component={ShowCouponDetail} />
            <Route path="/createCoupon" component={CreateCouponContainer} />
            <Route path="/" render={() => {
              return (
                <div>
                  <ShowCoupons />
                </div>
              );
            }} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default (App);

// <button
//   className="buttonGen"
//   onClick={ (e) => {
//     e.preventDefault();
//     <CreateCoupon />
//   } }
//   >Create Coupon</button>
