const Event = require('../models/CourseModel');
const {mutipleMongooseToObject}=require('../../ultil/mongoose');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storagePath = path.join('SRC/Resouses/public/page-1/assets');

// Check if the directory exists, create it if not
if (!fs.existsSync(storagePath)) {
  fs.mkdirSync(storagePath, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, storagePath);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix ='Anh1';
    const newFilename = `${uniqueSuffix}${path.extname(file.originalname)}`;
    cb(null, newFilename);
  }
});

const upload = multer({ storage: storage }).single('image');
class LoginController {
  //[get]/news
  index(req, res) {
   res.render('login',{ showHeaderAndFooter: false });
  }
  upload(req, res) {
    
    }
}
module.exports = new LoginController();
