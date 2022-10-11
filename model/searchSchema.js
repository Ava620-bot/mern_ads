const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    
           id:{
              type: Number,
              required:true
           },
           companyId:{
            type: mongoose.Schema.Types.ObjectId, ref: 'companies',
            required:true
         },
         primaryText:{
            type: String,
            required:true
         },
         headline:{
            type: String,
            required:true
         },
         description:{
            type: String,
            required:true
         },
         CTA:{
            type: String,
            required:true
         },
         imageUrl:{
            type: String,
            required:true
         }
         
})

const companySchema = new mongoose.Schema({
    
   _id:{
      type: mongoose.Schema.Types.ObjectId, ref: 'search',
      required:true
   },
   name:{
    type: String,
    required: true
   },
   url:{
     type: String,
     required: true
   }
 
 
})

const Company = mongoose.model('companies', companySchema);

const Search = mongoose.model('searches', searchSchema);
module.exports = {Search, Company};