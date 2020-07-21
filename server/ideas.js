const ideasRouter = require('express').Router();

module.exports = ideasRouter;

const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId
} = require('./db');

const checkMillionDollarIdea = require('./checkMillionDollarIdea');

// Routes for /api/ideas

ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if(idea) {
    req.idea = idea;
    next();
    } else {
        res.status(404).send('No idea found');
    }
});

ideasRouter.get('/', (req, res, next) => {
    let allIdeas = getAllFromDatabase('ideas');
    res.send(allIdeas);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    if(!false) {
    const newIdea = addToDatabase('ideas', req.body);
    res.status(201).send(newIdea);
    };
});

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    if(!false) {
    const updatedIdeaInstance = updateInstanceInDatabase('ideas', req.body);
    res.send(updatedIdeaInstance);
    };
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = deleteFromDatabasebyId('ideas', req.params.ideaId);
    res.status(204).send();
});