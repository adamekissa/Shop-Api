import pg from "pg";
import * as config from "../config.js"

const pool = new pg.Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    port: config.port, 
    password: config.password, 
    ssl: { rejectUnauthorized: false }

})

export default function query(text, params){
    return pool.query(text, params)
}