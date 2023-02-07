import express, { response } from "express";
import axios from "axios";
const port = 8888;
import cheerio from "cheerio"


const app = express();




app.get("/",(req,res)=>{
    res.json("Api activated")
})



//endpoints


const post = []

app.get("/sports",(req,res)=>{
    axios.get("https://www.theguardian.com/uk/sport")
    .then((response)=>{
        const html = response.data
        const $ = cheerio.load(html)

        $('a:contains("sport")',html).each(()=>{
            const title = $(this).text();
            const url = $(this).attr("href")

            post.push({
                title,
                url
            })
        }) ; res.json(post)
        
    })
    .catch((err)=>{
        console.log(err)
    })
})



app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})