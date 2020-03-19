const express = require("express");
const path = require("path");
const fs = require("fs");
let autoIterator = 1;


const dbRoute = path.join(__dirname, "/db/db.json");
const dbConnect = JSON.parse(
  fs.readFileSync(dbRoute, (err, data) => {
    if (err) throw err;
  })
);

const dbWrite = dbConnect => {
  let filtered = dbConnect.filter(function(el) {
    return el != null;
  });
  fs.writeFileSync(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify(filtered),
    err => {
      if (err) throw err;
    }
  );
};