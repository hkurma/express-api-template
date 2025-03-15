import { Router } from "express";

import exampleRouter from "./example.router";

const router = Router();

// Add Routers
router.use("/example", exampleRouter);

export default router;