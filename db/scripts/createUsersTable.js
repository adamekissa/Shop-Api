import query from "../index.js";

const sqlString = "CREATE TABLE IF NOT EXISTS users (user_id SERIAL PRIMARY KEY, firstName TEXT, LastName TEXT, email TEXT)";

async function createUsers(){
    const res = await query(sqlString);
    console.log("Connected to DB!!");
    console.log("Table Created", res.rows);
}

createUsers()