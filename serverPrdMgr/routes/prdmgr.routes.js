const PrdMgrController = require('../controllers/prdmgr.controller');

module.exports = (app) => {
    // app.get('/api/prds',()=>{});
    app.post('/api/prds/new',PrdMgrController.create);
    app.get('/api/prds',PrdMgrController.getAll);
    app.get('/api/prds/:id',PrdMgrController.getOne);
    app.put('/api/prds/:id',PrdMgrController.update);
    app.delete('api/prds/:id',PrdMgrController.remove);
};

// app.get('/',(req, res)=>{
//     res.send("response getting sent back to browser...");
//     res.json({message: "response sending back a json object"});
// })