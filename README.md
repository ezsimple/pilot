## How to make

$ mkdir pilot
$ cd pilot
$ yarn init -y
$ yarn add express path nodemon
$ vi index.js
const express = require('express');
const path = require('path');
const app = express()

app.use(express.static('public'));

app.get("/api/greeting", (req,res) => {
  res.send("Hello World!")
})

// start cmd : $ yarn run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log('Service Port : ',PORT);
});

$ vi package.json
add scripts.server field
  "scripts": {
    "server": "nodemon index.js"
  },

$ mkdir public
$ echo "{'hello':'world'}" > public/hello.json

$ yarn run server # to sart server

$ curl -XGET localhost:5000/api/greeting
$ curl -XGET localhost:5000/hello.json

ref-site : https://chaewonkong.github.io/react/2018/12/21/express-with-react/
