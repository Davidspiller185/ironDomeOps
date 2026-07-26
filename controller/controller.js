import {postOperator,postIncident,createLogIncident,patchStatus,OperatorIncident,createLogStatus,OpenIncident,Logs} from "../services/logic.js"
export async function createOperator(req,res,next) {
    try{
    const {name,rank} = req.body
    const operatorcreate = await postOperator(name,rank)
    res.status(201).json({newIdOperator:operatorcreate})
    }
    catch(err){
        next(err)
    }
}

export async function createIncident(req,res,next) {
    try{
        const {codeName,threatLevel,operatorId} = req.body
        const incidentCreate = await postIncident(codeName,threatLevel,operatorId)
        if(!incidentCreate){
            const err = new Error("not found operatorId")
            const status = 404
            return next(err)
        }
        const logs = await createLogIncident(incidentCreate,operatorId)
        res.status(201).json({newIdIncident:incidentCreate,newIdLog:logs})
    }
    catch(err){
        next(err)
    }
}

export async function updateStatusIncident(req,res,next) {
    try{
        const {id} = req.params
        const {status} = req.body
        const updateStatus = await patchStatus(id,status)
        if(updateStatus === 0){
            const err = new Error("not found incident id")
            const status = 404
            return next(err)
        }
        const getOperator = await OperatorIncident(id)
        const log = await createLogStatus(id,getOperator,status)
        res.status(201).json({updaet:`${updateStatus} row affected`,newIdLog:log})
    }
    catch(err){
        next(err)
    }
}

export async function getOpenIncident(req,res,next) {
    try{
        const openIncident = await OpenIncident()
        if(openIncident.length === 0){
            const err = new Error("not found openIncident")
            const status = 404
            return next(err)
        }
        res.status(200).json({openIncident:openIncident})
    }
    catch(err){
        next(err)
    }
}

export async function getLogs(req,res,next){
    try{
        const allLogs = await Logs()
        if(allLogs.length === 0){
            const err = new Error("not found logs")
            const status = 404
            return next(err)
        }
        res.status(200).json({allLogs:allLogs})
    }
    catch(err){
        next(err)
    }
}











