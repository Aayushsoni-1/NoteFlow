import mongoose from 'mongoose'

// Steps to move Forward:
// 1- Create a Schema
// 2- Create a model based on that schema

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
},
{timestamps: true} //mongoDB will automatically give createdate updatedat 

)

export const Note = mongoose.model('Note', noteSchema);
