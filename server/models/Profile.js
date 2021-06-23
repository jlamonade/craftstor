const mongoose = require('mongoose');

const { Schema } = mongoose;
const Project = require('./Project')

const profileSchema = new Schema({
    skills: {
        type: String,
        required: false,
        trim: true
    },
    portfolio: {
        type: String,
        required: false,
    },
    projects: [Project.schema]
})

const Profile = mongoose.model('Product', profileSchema);

module.exports = Profile;