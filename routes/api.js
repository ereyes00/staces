var splitRouter = require('express').Router();

splitRouter.use('/api/movie', require('./movieRouter'));
// splitRouter.use('/api/comment', require('./commentRouter'));
// splitRouter.use('/api/vote', require('./voteRouter'));

module.exports=splitRouter;