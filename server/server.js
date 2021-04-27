const port = 7000;
const db_name = "dbJokes";
// const cors = require('cors');    //not needed right now as I have no front end
const express = require('express');


//set up express and enabling req.body parsing
const app = express();
app.use(express.json());
// app.use(cors());

//load routes file with app
require('./routes/...')(app);

//ready for server to listen
app.listen(port, () =>{
    console.log(`Web Server established - listening for requests on port ${port} to respond to ...`);
})

//load mongoose connection file
require('./config/...')(db_name);
