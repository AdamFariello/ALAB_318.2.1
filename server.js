
//import express from "express";
// Imports
/*
import express from "express";
import fs from "fs";
*/

const { error } = require("console");
const express = require("express");

const app = express();
const port = 8000;

app.use(express.json());



app.get("/", (req,res) => {
    res.write("GET example");
});

app.post("/", (req, res) => {
    res.write("POST example");
});



app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
})