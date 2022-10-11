const mongoose = require('mongoose');
const uri = 'mongodb+srv://Mohit_Srivas:cZlyjY2WIRAjGC7y@cluster0.0xlfueg.mongodb.net/ADS?retryWrites=true&w=majority'


async function connect(){
    try{
     await mongoose.connect(uri);
     console.log('Connected to mongodb atlas');
    }catch(error){
     console.error(error);
    }
   }
   
   connect();