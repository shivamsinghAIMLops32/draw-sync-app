import  express from "express";

const app = express();

const port = process.env.PORT || 8000;

app.listen(prompt,()=>{
console.log(`server is running at ${port}`);
});
