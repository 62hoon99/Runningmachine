import express from "express";
import { selectReviewList } from "../controller/review";

const router = express.Router();

router.get("/:company_id", selectReviewList);

export default router;