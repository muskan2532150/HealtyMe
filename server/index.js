const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = 3001;

const uri =process.env.ATLAS_URI;

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(uri);
console.log('Connection build||||') 
}

app.listen(port,()=>{
    console.log("Connection build");
});

