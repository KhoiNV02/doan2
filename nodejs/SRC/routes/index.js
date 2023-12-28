//trang điều phối chung đến các trang 
const newsRouter = require('./views');
const sitesRouter = require('./site');
const detailRouter = require('./detail');
const meRouter = require('./me');
const thuongRouter=require('./thuong');
const CapNhatRouter=require('./CapNhat');
const loginRouter=require('./login');

function route(app) {
    app.use('/views', newsRouter);
    app.use('/me', meRouter);
    app.use('/detail', detailRouter);
    app.use('/thuong', thuongRouter);
    app.use('/CapNhat', CapNhatRouter);
    app.use('/home', sitesRouter);
    app.use('/', loginRouter);
}
module.exports = route;
