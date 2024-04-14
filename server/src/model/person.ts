import mongoose from 'mongoose';
const personSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    age:Number,
    mobile:Number,

});

const personModel = mongoose.model('person', personSchema);

export default personModel;
