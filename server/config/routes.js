var surveys = require('../controllers/surveys.js');
var path = require('path');

module.exports = function(app) {

    app.post('/surveys', function(req, res) {
        console.log("routes postSurveys ", req.body);
        surveys.postSurveys(req, res);
    })

    // Get 1 Survey 
    app.get('/surveys/:id', (req, res) => {
        surveys.getSurveyById(req, res);
    })
        
    app.get('/surveys', function(req, res) {
        surveys.getSurveys(req, res);
    })

    app.delete("/surveys/:_id", (req, res) => {
        surveys.deleteSurvey(req, res);
    });

    // Update 1 Survey 
    // app.put('/surveys/:id', (req, res) => {
    //     surveys.putSurvey(req, res);
    // })

    // // Express Test
    // app.get('/express', function(req, res) {
    //     anonymous.root(req, res);
    // })

    // Root Request
    app.get('/', function(req, res) {
        console.log(`root / from node`);
        surveys.root(req, res);
        // res.sendFile(path.resolve("./mongoose.js"))
    })

    app.all("*", (req,res,next) => {
        console.log(`app.all / from node`);
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}