import pool from "../db/database.js"

export async function insertOperator(name,operator_rank) {
    const [rows] =  await pool.execute(
        `INSERT INTO operators(name,operator_rank) VALUES(?,?)`,
        [name,operator_rank]
    )
    return rows.insertId
}

export async function findOperatorId(operatorId){
    const [rows] = await pool.execute(
        `SELECT * FROM operators WHERE id = ?`,
        [operatorId]
    )
    return rows
}

export async function insertIncident(codeName,threatLevel,operatorid){
    const [rows] = await pool.execute(
        `INSERT INTO incidents(codeName,threatLevel,operatorid) VALUES(?,?,?)`,
        [codeName,threatLevel,operatorid]
    )
    return rows.insertId
}  

export async function insertLogIncident(incidentCreate,operatorId) {
    const [rows] = await pool.execute(
        `INSERT INTO logs(action,incidentId,operatorId,description) VALUES(?,?,?,?)`,
        ["INCIDENT_CREATED",incidentCreate,operatorId,"New incident created"]
    )
    return rows.insertId
}

export async function findIncidentId(id){
    const [rows] = await pool.execute(
        `SELECT * FROM incidents WHERE id = ?`,
        [id]
    )
    return rows
}

export async function setIncidentStatus(id,status){
    const [rows] = await pool.execute(
        `UPDATE incidents SET status = ? WHERE id = ?`,
        [status,id]
    )
    return rows.affectedRows
}

export async function selectOperator(id){
    const [rows] = await pool.execute(
        `SELECT operatorId FROM incidents WHERE Id = ?`,
        [id]
    )
    return rows[0].operatorId
}

export async function insertLogStatus(id,getOperator,status){
    const [rows] = await pool.execute(
        `INSERT INTO logs (action,incidentId,operatorId,description) VALUES(?,?,?,?)`,
        ["STATUS_UPDATED",id,getOperator,`Status changed to ${status}`]
    )
    return rows.insertId
}

export async function incidentOpen(){
    const [rows] = await pool.execute(
        `SELECT * FROM incidents WHERE status = ?`,
        ["OPEN"]
    )
    return rows
}

export async function selectLogs() {
    const [rows] = await pool.execute(
        `SELECT * FROM logs`
    )
    return rows
}