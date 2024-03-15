import express from "express";
import {db,connectToDb} from "./db.js"

const app = express();
app.use(express.json());

// const findArticle=(name)=>articleInfo.find((article) => article.name === name);

app.get('/api/articles/:name',async(req,res) => {
    const {name} = req.params;
    const article = await db.collection("articles").findOne({name})
    if(article){
        res.json(article);

    }else{
        res.sendStatus(404);
    }
});

app.put("/api/articles/:name/likes",async (req,res) => {
    
    const {name} = req.params;
    await db.collection("articles").updateOne({ name }, { $inc:{likes:1} });
    const article = await db.collection("articles").findOne({name});
    if(article){
        res.json(article);
    } else{
        res.sendStatus(404);
    }
   
});
app.post("/api/articles/:name/comments",async (req,res) => {
    
    const {name} = req.params;
    const{by,comment} = req.body;
    await db.collection("articles").updateOne({name}, {$push:{comments: {by,comment}} });
    const article = await db.collection("articles").findOne({name});
    if(article){
        res.json(article);
    } else{
        res.sendStatus(404);
    }
   
});


connectToDb(() =>{
    console.log("successfully connected to database");
    
    app.listen(8000,() =>{
        console.log("listening on http://localhost:8000");
    });
});