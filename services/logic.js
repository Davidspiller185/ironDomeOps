import {insertOperator,findOperatorId,insertIncident,insertLogIncident,findIncidentId,setIncidentStatus,selectOperator,insertLogStatus,incidentOpen,selectLogs} from "../repositories/repo.js"
export async function postOperator(name,rank) {
    return await insertOperator(name,rank)
} 

export async function postIncident(codeName,threatLevel,operatorId) {
    const find = await findOperatorId(operatorId)
    if(find.length === 0){
        return false
    }
    return await insertIncident(codeName,threatLevel,operatorId)
}

export async function createLogIncident(incidentCreate,operatorId) {
    return await insertLogIncident(incidentCreate,operatorId)
}

export async function patchStatus(id,status) {
    const find = await findIncidentId(id)
    if(find.length === 0){
        return false
    }
    return await setIncidentStatus(id,status)
}

export async function OperatorIncident(id){
    return await selectOperator(id)
}

export async function createLogStatus(id,getOperator,status) {
    return await insertLogStatus(id,getOperator,status)
}

export async function OpenIncident() {
    return await incidentOpen()
}

export async function Logs() {
    return await selectLogs()
}





