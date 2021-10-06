import React, { useState } from 'react';
import { Input, Space } from 'antd';
import { Table } from 'antd';


 const { Search } = Input;

function Main()
{
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          width: 300,
        },
        {
          title: 'Released at',
          dataIndex: 'Releasedat',
          width: 200,
        },
        {
          title: 'Language',
          dataIndex: 'Language',
        },
      ];
      const data = [];

   var [api,setAPI]=useState([]);
      



   var OnSearch = (value) => {

    fetch('https://api.themoviedb.org/3/search/movie?api_key=6c4ca9719053a1a94c69b64346ed4466&language=en-US&query='+value+'&page=1&include_adult=false')
        .then (results => results.json())
        .then (data =>{

            setAPI(data.results); 
               
        })
}

      

    
    
    return(
<>
<h2>Search Any Movie (🦸 , 🚩 , 🏎️)</h2>
<div className="searchbar">
<Space direction="vertical"justify={"center"} >

    <Search justify={"center"} gutter={23} size={"large"}  placeholder="search any movie" onSearch={OnSearch} enterButton  />

  </Space>
  </div>
 <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />,




{
   api.map(  (index,key) =>
   {
      
    
    var{original_title,release_date,original_language}=index;    
    
       data.push({
              key: index,
              name: `${original_title}`,
              Releasedat: `${release_date}`,
              Language: ` ${original_language}`,
            });
   } )

}



</>
    )
}

export default Main;