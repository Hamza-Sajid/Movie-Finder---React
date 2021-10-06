import React from "react";
import { useHistory } from 'react-router-dom';




function Header()
{
  const history = useHistory();

  return(
        
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<img src=" https://uploads-ssl.webflow.com/56f170a1cb3840d853fdfdbf/56f170a1cb3840d853fdfdff_case-study-icon.png " width="50px" height="50px" style={{marginTop: '10px', marginLeft: '20px',   filter: 'sepia(60%)' }} alt="logo"/>

  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page"   onClick={()  => history.push('/Main')} >Home</a>
        <a className="nav-link active" onClick={()  => history.push('/HomePage')}  >Popular</a>
        <a className="nav-link active" onClick={()  => history.push('/Upcoming')}  >Upcoming</a>
        <a className="nav-link active"  onClick={()  => history.push('/Todayshow')}     >ToDay Show</a>
      </div>
    </div>
  </div>
</nav>

    )
}


export default Header;