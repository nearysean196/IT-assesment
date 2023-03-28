const { response } = require("express");
const express = require("express");
const nunjucks = require("nunjucks");
const server = express();
const port = 3000;

server.engine("html", nunjucks.render);
server.set("view engine", "html");
server.use(express.static("public"));

const sqlite3 = require("sqlite3");

nunjucks.configure("views", {
  autoescape: true,
  express: server,
});

server.get("/", (request, response) => {
  response.render("index");
});
server.get("/Contactme",(request,response) => {
response.render("Contactme")
});
server.get("/Aboutme",(request,response) => {
  response.render("Aboutme")
  });
server.get("/Workexperience",(request,response) => {
  response.render("Workexperience")
  });
server.get("/Interests",(request,response) => {
    response.render("Interests")
    });
server.get("/Work experience",(request,response) => {
    response.render("Work experience")
    });
server.get("/Education",(request,response) => {
    response.render("Education")
    });
server.get("/refrence",(request,response) => {
    response.render("name")
    });
server.listen(port, () => {
  console.log(
    `Your local server is waiting for requests at 127.0.0.1:${port} or at localhost:${port}`
  );
});
