import React , {useState,useEffect } from "react";
import { Card } from 'antd';
import { Rate } from 'antd';
const { Meta } =Card;
//*************** */

function HomePage()
{
    
    //state 
    const [api, setAPI] = useState([]);

    //API Calling
       
   
     useEffect(() => {
        fetch ('https://api.themoviedb.org/3/trending/all/day?api_key=6c4ca9719053a1a94c69b64346ed4466')
        .then (results => results.json())
        .then (data =>{

            setAPI(data.results); 
               
        })
      },[])
 const imgUrl="https://image.tmdb.org/t/p/w500/";
return(
 
 <>
 
 <h2>Trending Movies 📈</h2>

    {
        api.map(  (value,key) =>
        {
            
          
            const {poster_path , name}=value;
            var {vote_average}=value;
            vote_average=vote_average/2;
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
      
    <Meta title={name} description={"Rated  "+vote_average }  />
    <Rate  allowHalf count={vote_average}  value={vote_average}/>
  </Card>

        </div>

            )
        }  )
    }
       

    </>
)
}
export default HomePage;