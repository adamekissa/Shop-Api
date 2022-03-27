import query from "../db/index.js";

export default async function getAllUsers(){
    const sqlString = "SELECT * FROM users;";
    const res = await query(sqlString);
    return res.rows;
}