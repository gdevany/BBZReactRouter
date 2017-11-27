import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";



class CreateCoupon extends React.Component {
  constructor() {
    super();
    this.state = {
      coupons: {
          username: "",
          bizName: "",
          bizQR: "",
          bizLogo: "",
          heading: "",
          couponDesc: "",
          restrictions: "",
          subject: "Eat Now",
          subtopics: "",
          searchWords: "Fast Food",
          streetAndNum: "",
          city: "",
          zip: "",
          bizPhone: "",
        }
    };
  }

  goHome = () => {
    return this.props.history.push("/");
  }

  render() {
    // Dropdown list of Subjects
    var showSubjectList = "";
    // map subjects to show in dropdown
    showSubjectList = this.props.category.map((c,i) => {
      return <option key={i} value={c.subject}>{c.subject}</option>
    })

    // Dropdown list of Subtopics
    var showSubtopics = "generic";
    // map category to find matching subject
    showSubtopics = this.props.category.map((c,i) => {
      var st = "";
      if(c.subject === this.state.coupons.subject) {
        // map types to show in dropdown
        st = c.types.map((t,i) => {
          return <option key={i} value={t}>{t}</option>
        })
      } return st;
    })

      return (
        <div className="container text-center">
          <div className="row">
            <Link to={"/"}>
              <button className="backButton">back</button>
            </Link>
            <h1>Create New Coupon</h1>
            <form onSubmit={(e) => {
              e.preventDefault();
              if (this.props.createCoupon) {
                this.props.createCoupon(this.state.coupons);
                this.goHome();
              };
            }}>
              <div>
                Buy One: <br />
                <input
                placeholder="*required*"
                onChange={(e) => {
                  const coupon = {heading: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><small>(Get One Free)</small><br /><br />
              </div>
              <div>
                Business Name: <br />
                <input
                onChange={(e) => {
                  const coupon = {bizName: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><br />
              </div>

              <div>
                Business Logo Link: <br /><input
                placeholder="http://..."
                onChange={(e) => {
                  const coupon = {bizLogo: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><br />
              </div>

              <div>
                Coupon Description: <br /><input onChange={(e) => {
                  const coupon = {couponDesc: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><br />
              </div>
              <div>
                Restrictions: <br /><input onChange={(e) => {
                  const coupon = {restrictions: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><br />
              </div>
              <div>Business Address:<br />
                <div>
                  Number and Street Name:<br /><input onChange={(e) => {
                    const coupon = {streetAndNum: e.target.value};
                    this.setState({
                      coupons: Object.assign(this.state.coupons,coupon)
                    });
                  }} /><br />
                </div>
                <div>
                  City:<br /><input onChange={(e) => {
                    const coupon = {city: e.target.value};
                    this.setState({
                      coupons: Object.assign(this.state.coupons,coupon)
                    });
                  }} /><br />
                </div>
                <div>
                  Zipcode:<br /><input onChange={(e) => {
                    const coupon = {zip: e.target.value};
                    this.setState({
                      coupons: Object.assign(this.state.coupons,coupon)
                    });
                  }} /><br />
                </div>
              </div>
              <div>
                Phone#: <br /><input onChange={(e) => {
                  const coupon = {phone: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }} /><br /><br />
              </div>
              <div>
                Subject: <br />
                <select onChange={(e) => {
                  const coupon = {subject: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }}>{showSubjectList}
                </select>
                <br /><br />
              </div>
              <div>
                Subtopic: <br />
                <select onChange={(e) => {
                  const coupon = {searchWords: e.target.value};
                  this.setState({
                    coupons: Object.assign(this.state.coupons,coupon)
                  });
                }}>{showSubtopics}
                </select>
                <br /><br />
              </div>
                <button className="buttonGen bigText">Create</button>
            </form>
          </div>
        </div>
      )
  }
}

CreateCoupon.propTypes = {
  category: PropTypes.array.isRequired,
  createCoupon: PropTypes.func.isRequired
}

export default CreateCoupon;
