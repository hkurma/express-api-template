import { Router } from "express";

import { getMessage } from "../controllers/example.controller";

const router = Router();

// Create Routes
router.get("/", getMessage);

export default router;