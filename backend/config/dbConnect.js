const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const dbConnect = async() => {
    try {

        const connection = await mongoose.connect(process.env.dbURI);
        console.log("database connected successfully.....");
         
    } catch (e) {
        console.log("error!!!", e.message);
    }
}

module.exports = dbConnect;

