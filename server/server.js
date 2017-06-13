const path = require('path');
const publicPath = path.join(__dirname,'../public');
const express = require('express');

var app = express();
app.use(express.static(publicPath));

const port = process.env.PORT || 3000;

//app.get('/');

app.listen(port, () =>{
  console.log(`Started at port ${port}`);
});

module.exports={app};