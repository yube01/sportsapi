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

const data = {
    name:"",
    img:""
}

async function getGenre () {
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data)
        const item = $("section")
        

        data.name = $(item).find("h3").text()
        data.img = $(item).find(".product_price .price_color").text()
        console.log(data)
        
    } catch (err) {
        console.log(err)
        
    }

}

getGenre();



app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})