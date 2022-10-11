const { json } = require('express');
const express = require('express');
const { Search, Company } = require('../model/searchSchema');

const router = express.Router();

require('../db/conn');

// {Search, Company} = require('../model/searchSchema');
// const Company = require('../model/companySchema');

router.post('/search', async(req, res)=>{
    console.log(req.body);
    const { id, companyId, primaryText, headline, description, CTA, imageUrl } = req.body;
    

    const search = new Search({ id, companyId, primaryText, headline, description, CTA, imageUrl });
    

    const result = await search.save();
 
     if(result){
         res.status(201).json({message:'Data has stored successfully'});
     }
     else{
         res.status(500).json({error:'Failed to store data'});
     } 

    })
router.post('/company', async(req, res)=>{
   
    const { _id, name, url } = req.body;
    console.log(req.body);
    const company = new Company({ _id, name, url }); 

    const response = await company.save();
    if(response){
        res.status(201).json({message:'Data has stored successfully in company'});
    }else{
        res.status(500).json({error:'Failed to store data in company'});
}
})

//Here we are creating an api for 'searches' collections getting the data to react frontend
// router.get('/search', (req, res)=>{
//     Search.find((err, data)=>{
//         if(err){
//             res.status(500).send(err);
//         }else{
//             res.status(200).send(data);
//         }
//     })
// })

router.get('/search', async(req,res)=>{
    

    // try {

    //     //here we are destrucring the title index we are created for the search atlas
    //     const{headline} = req.query;
    //     const agg = [
    //         {
    //             "$search":{
    //                 "autocomplete":{
    //                     "query": headline,
    //                     "path": 'headline',
    //                     "fuzzy":{
    //                         "maxEdits": 2
    //                     },
    //                 },
    //             },
    //         },
    //         {
    //             "$limit": 7
    //         },
    //         {
    //             "$project":{
    //                 "id":0,
    //                 // name: 1,
    //                 "primaryText":1, 
    //                 "headline":1, 
    //                 "description":1, 
    //                 "CTA":1, 
    //                 "imageUrl":1,
    //                 // url:1

    //             }
    //         },
    //     ]
    //     const response = await Search.aggregate(agg)
    //     return res.json(response)
    // } catch (error) {
    //     console.log(error);
    //     return res.json([]);
    // }


    Search.aggregate([
        { $lookup:
            {
              from: 'companies',
              localField: 'companyId',
              foreignField: '_id',
              as: 'companyDetails'
            }
          } ]).exec(function(err, result) {
            if(err){
                            res.status(500).send(err);
                        }else{
                            res.status(200).send(result);
                        }

           
          });

        



            });
        
     
        
    


// router.get('/', (req, res)=>{
//     res.send('This is response from router.js');
// })



module.exports = router;