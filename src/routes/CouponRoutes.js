import express from "express";
import {list,show,create,remove} from "../controllers/CouponController";

const router = express.Router();

router.get("/coupons", list);
router.get("/coupons/:id", show);
router.post("/coupons", create);
router.delete("/coupons/:id", remove);

export default router;
