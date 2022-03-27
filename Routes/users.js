import express from "express";
import getAllUsers from "../Model/users.js";

const router = express.Router();

router.get("/", async function(req, res){
    const allUsers =  await getAllUsers();
    res.json({Payload: allUsers});
});

export default router;