class ThuongController {
  //[get]/news
  index(req, res) {
    res.render('CapNhat',{ showHeaderAndFooter: true,MSSV:req.query.MSSV,});
  }
  show(req, res) {
    res.send('trang con ở trong nè',{ showHeaderAndFooter: true });
  }
}
module.exports = new ThuongController();
