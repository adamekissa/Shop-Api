import express from "express";

const router = express.Router();

router.get("/", function(req, res){
    let greeting = "Heey there you, Welcome Home!";
    res.json({Payload: greeting});
})

export default router;