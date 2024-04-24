const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

app.get('/api/jobs',(req,res)=>{
    res.status(200).json({message:"Get All Jobs"})
})

app.listen(port, () => {
  console.log("Server Running");
});
