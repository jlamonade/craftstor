const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
    dueDate: {
        type: Date,
        required: true,
    },
    client: {
        type: String,
        required: true,
        trim: true
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;