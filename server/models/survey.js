// require mongoose
var mongoose = require('mongoose');

// to make a model, you can first define a schema, which is just the BLUEPRINT for a model
var SurveySchema = new mongoose.Schema({
    creator:  { type: String, required: true, minlength: 2 },
    question:  { type: String, required: true, minlength: 8},
    option_one:  { type: String, required: true, minlength: 3},
    option_two:  { type: String, required: true, minlength: 3},
    option_three:  { type: String, required: true, minlength: 3},
    option_four:  { type: String, required: true, minlength: 3},
    count_one:  { type: Number, required: true, default: 0},
    count_two:  { type: Number, required: true, default: 0},
    count_three:  { type: Number, required: true, default: 0},
    count_four:  { type: Number, required: true, default: 0}
}, {timestamps: true });

// Store the Schema under the name 'Survey'
mongoose.model('Survey', SurveySchema);
