import express, { response } from "express";
import axios from "axios";
const port = 8888;
import cheerio from "cheerio"




const app = express();




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


const newspapers = [
    {
        name:"",
        url:"https://www.cnn.com"
    },
    {
        name:"",
        url:"https://www.cnn.com"
    },
    {
        name:"",
        url:"https://www.cnn.com"
    },
  
]

newspapers.forEach(newspaper =>{
    axios.get(newspaper.url)
    
    .then((response)=>{
        const html = response.data
        const $ = cheerio.load(html)
        const item = $('a:contains("climate")',html)
        item.each(()=>{
            const title = $(item).text()
            const link = $(item).attr("href")
            article.push({title, link})
        })
        res.json(article)
    }).catch((err)=>{
        console.log(err)

})


})

const article = []
//const url = "https://www.foxnews.com/"

app.get("/api", (req,res)=>{




})


app.listen(port, ()=>{
    console.log("Server started")
    console.log(`${port}`)
})