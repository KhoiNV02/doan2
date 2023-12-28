const eventCurrent = require('../models/eventCurrentModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
class SiteController {
  //[get]/news
  index(req, res) {
    eventCurrent.find({
    })
   .then(event =>
    {
      res.render('home',{
        event:mutipleMongooseToObject(event),
        showHeaderAndFooter: true,
        MSSV:req.query.MSSV,
      });
    })
   .catch(error => next(error));
    // res.render('home');
  }
}
module.exports = new SiteController();
