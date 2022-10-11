import React from 'react'
import './Card.css';

function Card({text, items}) {

    

//     const filterData = items.filter((dt)=>{
//         if(text === ''){
//           return dt;
//         }
//         else{
//           return dt.headline.toLowerCase().includes(text);
//         }
//       })
  return (
      

    <div className='searchBar'>
   
    <article className="searchBar__container">
      {items&&items?.map(({ id, companyId, primaryText, headline, description, CTA, imageUrl, companyDetails })=>(

     
         

        <div className="searchBar__items" key={id}>
       

          <img  src={imageUrl} alt="" className="searchBar__image" />
          <h2>Name: { companyDetails.map((item)=>item.name) }</h2>
          <h1>Headline: {headline}</h1>
          <h1>Primary Text: {primaryText}</h1>
          <p>Description: {description}</p>
          <ul>
           <li className='link'><a href={ companyDetails.map((item)=>item.url) }>{CTA}</a></li>
          </ul>
        </div>
  ))}

</article>
</div>
  )
}

export default Card
