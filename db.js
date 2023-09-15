const mongoose = require('mongoose');
require('dotenv').config()
const url = process.env.MONGO_ATLAS_URL;

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(url);
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error(error.message);
      }
}

module.exports = connectToMongo;