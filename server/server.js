const port = 7000;
const db_name = "dbJokes";
// const cors = require('cors');    //not needed right now as I have no front end
const express = require('express');
const app = express();



//enabling request.body parsing
app.use(express.json());
//load routes file
//...

//load mongoose connection file



//ready for server to listen
app.listen(port, () =>{
    console.log(`Web Server established - listening for requests on port ${port} to respond to ...`);
})