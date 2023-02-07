import express from "express";
import axios from "axios";
const port = 8888;
import cheerio from "cheerio"


const app = express();




app.get("/",(req,res)=>{
    res.json("Api activated")
})



app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})