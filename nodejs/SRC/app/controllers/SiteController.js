const eventCurrent = require('../models/eventCurrentModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
class SiteController {
  //[get]/news
  index(req, res,next) {
    eventCurrent.find({ type: { $ne: '01' } })
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
  getSchool(req,res,next)
  {
    eventCurrent.find({type:'1'})
   .then(event =>
    {
      res.status(200).json({event});
    })
   .catch(error => next(error));
    // res.render('home');
  }

  getMajor(req,res,next)
  {
    eventCurrent.find({type:'2'})
   .then(event =>
    {
      res.status(200).json({event});
    })
   .catch(error => next(error));
    // res.render('home');
  }

  getclb(req,res,next)
  {
    eventCurrent.find({type:'3'})
   .then(event =>
    {
      res.status(200).json({event});
    })
   .catch(error => next(error));
    // res.render('home');
  }

  getHot(req,res,next)
  {
    eventCurrent.find({ type: /0/ })
   .then(event =>
    {
      res.status(200).json({event});
    })
   .catch(error => next(error));
    // res.render('home');
  }
}
module.exports = new SiteController();
