import { validPatchStatusIncident, validPostIncident, validPostOperator } from "../utils/utils.js";

export  function middleawrePostOperator(req,res,next) {
    if(!validPostOperator(req.body)){
        const err = new Error("must to send name and rank with string type")
        const status = 400
        return next(err)
    }
    next()
}

export function mideelewareCreateIncident(req,res,next){
    if(!validPostIncident(req.body)){
        const err = new Error("must to send coreect files for incident")
        const status = 400
        return next(err)
    }
    next()
}

export function middlewarePatchIncidentStatus(req,res,next){
    if(!validPatchStatusIncident(req)){
        const err = new Error("must to send id corrrect and status incident correct")
        const status = 400
        next(err)
    }
    next()
}

