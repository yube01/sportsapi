import express, { response } from "express";
import axios from "axios";
const port = 8888;
import cheerio from "cheerio"
import { HMobiledata } from "@mui/icons-material";



const app = express();


const url = "https://books.toscrape.com/catalogue/category/books/philosophy_7/index.html"

app.get("/",(req,res)=>{
    res.json("Api activated")
})



//endpoints

// const data = {
//     name:"",
//     img:""
// }

// async function getGenre () {
//     try {
//         const response = await axios.get(url)
//         const $ = cheerio.load(response.data)
//         const item = $("section")
        

//         data.name = $(item).find("h3").text()
//         data.img = $(item).find(".product_price .price_color").text()
//         console.log(data)
        
//     } catch (err) {
//         console.log(err)
        
//     }

// }

// getGenre();


const article = []

app.get("/api", (req,res)=>{
    axios.get("https://edition.cnn.com/sport")
    .then((response)=>{
        const html = response.data
        const $ = cheerio.load(html)


       $(".container").each(()=>{
            const title = $(this).text()
            article.push({title})
        })
    })
    res.json(article)
}).catch((err)=>{
    console.log(err)
})


app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})