const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors())

app.get("/api/users", (req , res) => {
    let friends = ["mike", "micha", "mikey", "mac", "frank"];
    res.status(200).send(friends);
});

app.get("/weather/:temperature", (req, res) => {
    const phrase = (`<h3>It was ${req.params.temperature} today</h3>`);
    res.status(200).send(phrase);
});

app.listen(4000, () => console.log("server running on port 4000"));