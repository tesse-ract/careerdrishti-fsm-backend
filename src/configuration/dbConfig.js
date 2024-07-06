const mongoose = require('mongoose');

const dbconnect=async ()=>
{
    try {
        await mongoose.connect("mongodb+srv://contactujval:LEx1eYHntKCQKXym@cluster0.o13hjze.mongodb.net/")
        console.log("dp is up");
    } catch (error) {
        console.log(error)
    }
}
module.exports=dbconnect;