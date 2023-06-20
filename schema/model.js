

const mongoose = module.require('mongoose')


const SubjectSchema = mongoose.Schema({
    Firstsubject:{
        required:true,
        type:String,
        max_length:200,
    },

    Secondsubject:{
        required:true,
        type:String,
        max_length:200,
    },

    Thirdsubject:{
        required:true,
        type:String,
        max_length:200,
    },

    Forthsubject:{
        required:true,
        type:String,
        max_length:200,
    },


})

module.exports = mongoose.model('current_subject', SubjectSchema)