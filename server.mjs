
import express from "express";
import fs from "fs";

/* Use if it's .js
const { error } = require("console");
const express = require("express");
*/

const app = express();
const port = 8000;

//app.use(express.json());

app.engine("html", (filePath, options, callback) => {
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err);

    //console.log(callback); //Gives: "[Function onRender]"
    
    let rendered;

    if (options.title) {
      rendered = content
        .toString()
        .replaceAll("#title#", options.title)
        .replace("#content#", options.content)
        .replace("#img#", options.img);
    } else {
      rendered = content
        .toString()
        .replaceAll("#img#", options.img)
        .replace("#content#", options.content);
    }

    return callback(null, rendered);
  });
});
//First paramater is a ARGUMENT you're trying to set
app.set("views", "./pages"); // Specify directory
app.set("view engine", "html"); // Register template engine (and extention to look for)



app.get("/", (req, res) => {
  let option = {
    title:"Your princess is in another castle",
    content: "Or maybe I'm your princess...",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.freepik.com%2Fpremium-photo%2Fanime-boy-sitting-bed-looking-out-window-night-sky-generative-ai_901242-8386.jpg&f=1&nofb=1&ipt=9f553853fecdc9ed02e2a932b4e50e5f8c0bcd173d259adb288e4217986b6e67"
    //css: "./pages/404.css"
  }
  res.render("404", option);
});

app.get("/tea", (req, res) => {
  let option = {
    content: "tea time!",
    img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FOs2Az5qAUancc%2Fgiphy.gif&f=1&nofb=1&ipt=012ab42b19d5aa7a7fa55e7783c5e7aaa6881041795c4bf7f5d8b51fc7cdad6a"
  }
  res.render("418", option);
});




app.get("/get", (req,res) => {
    res.write("GET example");
});
app.post("/post", (req, res) => {
    res.write("POST example");
});



app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
})