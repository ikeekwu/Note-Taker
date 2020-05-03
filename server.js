const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

app.listen(PORT, () =>{
    console.log(`Currently listening at Port:${PORT}`)
});

