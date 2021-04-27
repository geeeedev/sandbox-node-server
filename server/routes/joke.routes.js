const jokeController = require('../controllers/joke.controller');

module.exports = (app) =>{
    app.get('/api/jokes',jokeController.getAllJoke);
    app.get('/api/jokes/:id',jokeController.getOneJoke);
    app.post('/api/jokes/new',jokeController.createJoke);
    app.put('/api/jokes/update/:id',jokeController.updateJoke);
    app.delete('/api/jokes/delete/:id',jokeController.removeJoke);
};
