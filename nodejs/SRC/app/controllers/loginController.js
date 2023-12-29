const Event = require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');

class LoginController {
  //[get]/news
  index(req, res) {
   res.render('login',{ showHeaderAndFooter: false });
  }
}
module.exports = new LoginController();
