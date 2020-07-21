const meetingsRouter = require('express').Router();

module.exports = meetingsRouter;

const {
  createMeeting,
  getAllFromDatabase,
  addToDatabase,
  deleteAllFromDatabase
} = require('./db');

meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('meetings'));
});

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = createMeeting();
    const newMeetingInDb = addToDatabase('meetings', newMeeting);
    res.status(201).send(newMeetingInDb);
});

meetingsRouter.delete('/', (req, res, next) => {
    const allMeetingsDeleted = deleteAllFromDatabase('meetings');
    res.status(204).send();
});