module.exports = function (express) {
  var router = express.Router();

    router.get('/v1', function(req, res){
        res.json({hello: 'World'});
        console.log('API delivered')
    });

    return router;
};