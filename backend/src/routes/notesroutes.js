import express from "express"
import {getall,getById,postall,putall,deleteall} from "../controller/notecontroller.js"

const router=express.Router();

router.get("/",getall);
router.get("/:id", getById);
router.post("/",postall);
router.put("/:id",putall);
router.delete("/:id",deleteall);

export default router;