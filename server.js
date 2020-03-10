const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// GET Route

app.get("/", (req, res) => { res.sendFile(path.join(__dirname, "/public/index.html"))});

app.get("/notes", (req, res) => {res.sendFile(path.join(__dirname, "/public/notes.html"))});

// API Routes

app.get("/api/notes", (req, res) => {res.readFile(path.join(__dirname, "/db/db.json"))});

// POST Routes

app.post("/api/notes", (req, res) => {})


app.listen(PORT, () =>{
    console.log(`Currently listening at Port:${PORT}`)
});

