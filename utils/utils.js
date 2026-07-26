export function validPostOperator(obj){
    const {name,rank} = obj
    if(!name || !rank){
        return false
    }
    else if(typeof name !== "string" || typeof rank !== "string"){
        return false
    }
    else if(name.trim === "" || rank.trim === ""){
        return false
    }
    return true
}

export function validPostIncident(obj){
    const {codeName,threatLevel,operatorId} = obj
    const validcodeNames = ['RED SKY','BLACK FALCON','IRON SHIELD','NIGHT ARROW','SILENT DOME']
    const validThreatLevel = ['LOW','MEDIUM','HIGH','CRITICAL']
    if(!codeName || !threatLevel || !operatorId){
        console.log("must to send: codeName,threatLevel,operatorId")
        return false
    }
    else if(typeof codeName !== "string" || typeof threatLevel !== "string" || typeof operatorId !== "number"){
        console.log("must to send type of string to codeName and threatLevel, and type of number to operatorId")
        return false
    }
    else if(codeName.trim === "" || threatLevel.trim === ""){
        console.log("codeName and threatLevel must to be no empty")
        return false
    }
    else if(!validcodeNames.includes(codeName.toUpperCase())){
        console.log(`must to send one of this code name: ${validcodeNames}`)
        return false
    }
    else if(!validThreatLevel.includes(threatLevel.toUpperCase())){
        console.log(`must to sent one of this threatLevel: ${validThreatLevel} `)
        return false
    }
    return true
    
    
}

export function validPatchStatusIncident(obj){
    const {id} = obj.params
    const {status} = obj.body
    const legalStatus = ["OPEN","TRACKING","INTERCEPTED","CLOSED"]
    if(id.trim === "" || Number.isNaN(id) || Number(id)<=0){
        return false
    }
    else if(!status || !legalStatus.includes(status.toUpperCase())){
        return false
    }
    return true

}

