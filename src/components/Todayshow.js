import React , {useState,useEffect } from "react";
import { Card } from 'antd';

const { Meta } =Card;


function Todayshow()
{
     //state 
     const [api, setAPI] = useState([]);

     //API Calling
        
    
      useEffect(() => {
         fetch ('https://api.themoviedb.org/3/tv/airing_today?api_key=6c4ca9719053a1a94c69b64346ed4466&language=en-US&page=1')
         .then (results => results.json())
         .then (data =>{
             setAPI(data.results);    
         })
       },[])
  const imgUrl="https://image.tmdb.org/t/p/w500/";
 return(
  
  <>
  
  <h2>Today Airing Shows List 📺</h2>
 
     {
         api.map(  (value,key) =>
         {
             
           
             const {original_name , vote_average,poster_path }=value;
         console.log(value)
             // var finalname;
             // if(name=="")
             // {
             //       original_name=finalname;
             // }
             // else finalname=name;
             return(
               
                 <div className="top" >
         <Card 
     hoverable
     style={{ width: 240 }}
     cover={<img alt="example" src={imgUrl+poster_path} />}
   >
       
     <Meta title={original_name} description={"Votes  "+vote_average }  />
   </Card>
 
         </div>
 
             )
         }  )
     }
        
 
     </>
 )
}

export default Todayshow;