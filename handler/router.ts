import { Router } from "express";
import genPrime from "./prime.handler";
import genTriangle from "./triangle.handler";
import genOdd from "./odd.handler";

const router = Router()

router.get("/gen-prime", genPrime);
router.get("/gen-triangle", genTriangle);
router.get("/gen-odd", genOdd);

export default router;