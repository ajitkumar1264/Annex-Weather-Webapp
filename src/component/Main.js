import React from 'react';
import logo from '../data1.svg'
import data from '../wea2.svg'
import { useState,useEffect } from 'react';

export default function Main() {

const [city, setcity] = useState(null);
const [search, setsearch] = useState("pune");


const getWetherdata=async()=>{
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=d0064e2aeacb76e67134dc721ab96361`
  const fet= await fetch(url);
  const dat= await fet.json();
  console.log(dat);
  setcity(dat.main);
}



useEffect(() => {
 
  getWetherdata();
  
},[search]);


const [style, setstyle] = useState({
  color:"black"
});
const [vibe, setvibe] = useState("Enable");

 const dark=()=>{

  if(style.color=="black")
  {
    setstyle({
      color:"white",
      background: "#041021"

    })
    setvibe("Disable")
    document.body.style.backgroundColor="#041021"; 
  }
  else
  {
   
      setstyle({
        color:"black",
        background: "#ffffff"
      })
      setvibe("Enable")
      document.body.style.backgroundColor="#ffff"; 
  }
}


const gat=document.getElementById("time")


const dat=()=>{

const tim=new Date();
const sec=tim.getSeconds();
const min=tim.getMinutes();
const hor=tim.getHours();

const day=tim.getDate();
const mont=tim.getMonth()+1;
const yer=tim.getFullYear();

const fan=day+":"+mont+":"+yer+"  ||  "+hor+":"+min+":"+sec;


return fan;

}

setInterval(() => {
  
  gat.innerHTML=dat();


}, 2000);




  return <>
  <div className='container my-5'  style={style}>
  <nav className="navbar navbar-dark"  style={style}>
  <div className="container-fluid"  style={style} >
    <a className="navbar-brand"  style={style}><h1>🅰️Live Weather</h1>
    <div className='mx-5 my-2'><h2>Annex weather app</h2></div></a>


<form className="d-flex"  style={style}>
      <input  style={style} className="form-control me-2" type="search" placeholder="Search" onChange={(event)=>{setsearch(event.target.value)}}  aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>

<div class="form-check form-switch mx-5 my-3"  style={style}>
<input class="form-check-input" type="checkbox" role="switch" onClick={dark} id="flexSwitchCheckDefault"/>
<label class="form-check-label mx-2" for="flexSwitchCheckDefault">{vibe} dark mode</label>
</div>

<div className="container mx-5 my-5">
<section className='row mb-5 pb-md-4 align-items-center'>
<div className='col-md-5'>

{
  !city ? (
    <div >
    <h1 className='my-3'  style={style} >Data not found</h1>
    <img className='img-fluid mt-3 mx-auto w-50 my-5' src={logo} alt="hero" />
    
    </div>
    )
    :
    (
      <div  style={style}>
      <div className='my-5'><h1>{search}</h1></div>
     <div className='my-2'><h2>{city.temp} °C</h2></div>
    <div className='my-3'><h3>Min : {city.temp_min} °C || Max : {city.temp_max} °C</h3></div>   
    
      </div>

    )
 
}
<h4 id="time"></h4>
</div>
<div className='col-md-7 ps-md-5'>
<img className='img-fluid mt-3 mx-auto w-50' src={data} alt="hero" /></div>


</section>
</div></div>



<div className='container' style={style}>
<div className='container' >
<div class="d-flex justify-content-end ">
<h6 >Design by Vaghela Ajitkumar,
Computer Student</h6></div>
</div>
</div>


</>;
}
