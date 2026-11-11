const express = require("express");
const router = express.Router();
router.route("/").get((req,res)=>{
    res.status(200).json({message:"Hello world!"});
})
router.route("/").post((req,res)=>{
    res.status(200).json({message:"Posted!"});
})
router.route("/:id").put((req,res)=>{
    res.status(200).json({message:`edited ${req.params.id}`});
})
router.route("/:id").delete((req,res)=>{
    res.status(200).json({message:`deleted ${req.params.id}`});;
})
module.exports = router;