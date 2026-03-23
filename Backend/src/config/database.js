const mongoose = require('mongoose')


const connectToMongoDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to MongoDB")
    })
    .catch((err)=>{
        console.log("Error connecting to DB", err)
    })
}

module.exports = connectToMongoDB;