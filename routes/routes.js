import express from "express"
import { createIncident, createOperator, getOpenIncident, updateStatusIncident,getLogs } from "../controller/controller.js"
import { middleawrePostOperator, middlewarePatchIncidentStatus, mideelewareCreateIncident } from "../middleware/middleware.js"

const router = express.Router()


router.post("/operators",middleawrePostOperator,createOperator)

router.post("/incidents",mideelewareCreateIncident,createIncident)

router.patch("/incidents/:id/status",middlewarePatchIncidentStatus,updateStatusIncident)

router.get("/incidents/open",getOpenIncident)

router.get("/logs", getLogs)

export default router