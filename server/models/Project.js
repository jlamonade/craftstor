const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    dueDate: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    client: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;