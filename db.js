const mongoose = require('mongoose');
require('dotenv').config();
// const url = "mongodb://127.0.0.1:27017/iNotebook"
const url = "mongodb+srv://himanshu412:Inotebook8130@cluster0.s0bd9hm.mongodb.net/?retryWrites=true&w=majority"
console.log(process.env.MONGO_ATLAS_URL)
const connectToMongo = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error.message);
      }
}

module.exports = connectToMongo;