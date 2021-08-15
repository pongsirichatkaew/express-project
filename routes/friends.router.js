const express = require('express');
const friendRouter = express.Router();
const friendsController = require('../controllers/friends.controller');

friendRouter.use((req, res, next) => {
  console.log(`ip address: ${req.ip}`);
  next();
});
friendRouter.post('/', friendsController.postFriend);
friendRouter.get('/', friendsController.getFriends);
// GET /friends/22
friendRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendRouter;
