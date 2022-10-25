const mongoose = require("mongoose");

const mongodb = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log(`Mongodb connecting: ${conn.connection.host}`);
}
module.exports = {mongodb}