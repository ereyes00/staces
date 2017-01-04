var movieRouter = require('express').Router();
var db = require('../models')

const getMovies = (req,res) => {
  db.Movie.findOne({
    where:{title:req.params.title}
  })
  .then((data) => {
    console.log("from movieRouter" + data);
    res.send(data)
  })
}

//-----------------------------------
movieRouter.route('/')
    .get(getMovies)
    //.post(makeComment)
    //.delete(deleteComment)


module.exports = movieRouter