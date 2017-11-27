import CouponModel from "../models/CouponModel";

export function list(req, res) {
  console.log('in list');
  CouponModel.find({}).exec()
  .then(coupons => {
    return res.json(coupons)
  })
}

export function show(req, res) {
  console.log('in show (/coupons/:id)');
  CouponModel.find({id: req.params.id}).exec()
    .then(coupon => {
      return res.json(coupon)
    })
}

export function create(req, res, next) {
  const coupon = new CouponModel({...req.body});
  console.log(`saving coupon- req body: ${req.body}`);
  coupon
    .save()
    .then(c => {
      res.json(c);
    })
    .catch(err => next(err));
}

export function remove(req, res) {
  CouponModel.findByIdAndRemove(req.params.id)
  .then(res => {
    return res.json();
  })
}
