import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(json());
app.use(cors());

const users = [];

const tweets = [];

app.post("/sign-up", (req, res) => {
    users.push(req.body);
    console.log(users)
    res.send("ok");
})

app.get("/tweets", (req, res) => {
    res.send("ok");
});

app.get("/sign-up", (req, res) => {
    res.send("ok");
})


app.listen(5000, () => {console.log('Servidor iniciado em http://localhost:5000')});

