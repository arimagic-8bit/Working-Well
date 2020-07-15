const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    completion: {
        type: Number,
        required: true
    },
    rest: {
        type: Number,
        required: true
    }
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;