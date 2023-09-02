const mongoose = require("mongoose")
const DBURL = 'mongodb://127.0.0.1:27017/Library'

const ConnectDB = async () => {

   res =  await mongoose.connect(DBURL)

   console.log("Database Successfully Connected")

}

module.exports = ConnectDB