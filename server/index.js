const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;

app.use(express.json());

const uri =process.env.ATLAS_URI;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
}

mongoose.connection.once('open',()=>{
  console.log("Mongodb connection is build");
})

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');

app.use('/users',userRouter);
app.use('/products',productRouter);

app.listen(port,()=>{
    console.log("Connection build");
});
