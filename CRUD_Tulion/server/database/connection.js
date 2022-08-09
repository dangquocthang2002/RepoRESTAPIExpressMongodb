const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        // mongodb connection string
        const con = await mongoose.connect(process.env.MONGODB_URL, () =>{
            console.log(`Connected tomongodb successfully: `);
 
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports =connectDB;