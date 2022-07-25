import express from "express";
import { selectCompany } from "../controller/company";

const router = express.Router();

router.get("/:company_id", selectCompany);

export default router;
