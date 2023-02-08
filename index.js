import express, { response } from "express";
import axios from "axios";
const port = 8888;
import cheerio from "cheerio"



const app = express();


const url = "https://books.toscrape.com/catalogue/category/books/philosophy_7/index.html"

app.get("/",(req,res)=>{
    res.json("Api activated")
})



//endpoints



async function getGenre () {
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const genre = $("h1").text()
        console.log(genre)
        
    } catch (err) {
        console.log(err)
        
    }

}

getGenre();



app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})