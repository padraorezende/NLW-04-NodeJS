import express from 'express'

const app = express();


app.get("/", (request , response) =>{
    return response.send("ola");
})

app.post("/users", (request , response) =>{
    return response.send("ola");
})

app.listen(3333, ()=> console.log("oi"));