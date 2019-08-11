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
