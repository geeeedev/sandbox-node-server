const port = 6000;
const dbName = "dbPrdMgr";
const express = require("express");
const cors = require("cors");

//db connection setup
require('./config/mongoose.config')(dbName);

//server setup
const app = express();
app.use(express.json());
app.use(cors());

//route setup
require('./routes')

//server listens
app.listen(port, ()=>{
    console.log(`Web Server Setup Successful => Listening for request on port ${port} to respond to...`);
})
