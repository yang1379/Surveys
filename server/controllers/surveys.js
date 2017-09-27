var mongoose = require('mongoose');

// Retrieve the Schema called 'Survey' and store it to the variable Note
var Survey = mongoose.model('Survey');

module.exports = {

    postSurveys: function(req, res) {
        console.log(`controllers postSurveys ${req.body.question}`);
        var survey = new Survey(req.body);
        
            // Try to save that new player to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
            survey.save(function(err) {
                // if there is an error console.log that something went wrong!
                if(err) {
                    console.log('add survey failed');
                    console.log(err);
                } else { // else console.log that we did well and then redirect to the root route
                    console.log('successfully added a survey');
                    return res.json("added survey");
                }
            })
        
    },

    getSurveys: function(req, res) {
        Survey.find({}, function(err, surveys) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('Failed to find surveys');
            } else { // else console.log that surveys were retrieved
                console.log('Successfully retrieved all surveys');
                console.log(surveys);
                return res.json(surveys);
            }
        })
    },

    deleteSurvey: function (req, res) {
        Survey.findByIdAndRemove(req.params._id, function (err, survey) {
            console.log('deleting survey id ', req.params._id);
            console.log('deleting survey', survey);
            if (err) {
                console.log('Failed to delete survey');
                return;
            } else { // else console.log that survey was deleted
                console.log('successfully deleted survey');
                return res.json("success");
            }
        });
    },

    // Get 1 Survey
    getSurveyById: function(req, res) {
        // Retrieves an individual survey from the database.
        console.log(req.params.id);
        Survey.find({_id: req.params.id}, function(err, surveys) {
            // if there is an error console.log that something went wrong!
            if(err) {
                console.log('Failed to get survey');
                console.log(err);
                res.json({"failed" : "Failed to get survey"});
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully retrieved the survey');
                console.log(surveys);
                console.log(surveys[0]);
                // res.json(surveys[0]);
                return res.json(surveys[0]);
            }
          })
    },

    // Update 1 survey
    // putSurvey: function(req, res) {
    //     console.log(`put_task`);
    //     console.log(req.params.id);
    //     console.log(req.body);

    //     // Task.update({_id: req.params.id}, {$set: {title: req.body.title, description: req.body.description, completed: req.body.completed} },
    //     Task.update({_id: req.params.id}, set_string,
    //     // Task.update({_id: req.params.id}, {$set: {completed: req.body.completed}},
    //         function(err, doc) {
    //         // if there is an error console.log that something went wrong!
    //         if(err) {
    //             console.log('Failed to update task');
    //             console.log(err);
    //             res.json({"failed" : "Failed to update task"});
    //         } else { // else console.log that we did well and then redirect to the root route
    //             console.log('successfully updated the task');
    //             console.log(doc);
    //             res.json({"success" : "Successfully updated task"});
    //         }
    //       })
    // },

    // postNotes: function(req, res) {
    //     let taskInstance = new Note(req.body);
    //     taskInstance.save(function(err) {
    //         if (err) {
    //             return res.json(false);    
    //         }
    //         else {
    //             Note.find({}, function(err, notes) {
    //                 return res.json(notes);
    //             })
                
    //             return res.json(notes);
    //         }
            
    //     })
    // },

    root: function(req, res) {
        res.json("Express Root");
    }

}