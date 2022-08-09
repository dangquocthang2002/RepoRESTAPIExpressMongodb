const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');


const authorRoute = require('./routes/author');
const bookRoute  = require('./routes/book'); 
dotenv.config();

// CONNECT DATABASE

mongoose.connect((process.env.MONGODB_URL),
() => {
    console.log("Connected to MongoDB");
});

// mongodb+srv://<username>:<password>@cluster0.idx8nwe.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://<username>:<password>@cluster0.idx8nwe.mongodb.net/test
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("common"));




// ROUTES

app.use("/v1/author",authorRoute);
app.use("/v1/book",bookRoute);



const PORT =8000;
app.listen(PORT,() => {
    console.log(`server listening on port ${PORT}`);
})

