const mongoose = require('mongoose');
const url = "mongodb+srv://himanshu412:Inotebook8130@cluster0.s0bd9hm.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error.message);
      }
}

module.exports = connectToMongo;