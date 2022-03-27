import query from "../index.js";

const sqlString = "INSERT INTO users(firstName, lastName, email) VALUES ('Jallow', 'Adam', 'jalloe@gmail.com') RETURNING *"

async function populateUsers(){
    const res = await query(sqlString)
    console.log("Row Inserted", res.rows)
}

populateUsers()