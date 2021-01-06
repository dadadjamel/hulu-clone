import React, { Component,useState,useEffect } from 'react';
import "./nav.css"
import requests from './requests'


const Nav = ({setselectedoption}) => {
    const [active, setactive] = useState(false)
    useEffect(()=>{
        setactive(false)
    },active)
    return ( 
        <div className="nav" >
            <h2 className={`${active && "nav__option"}`} onClick={()=>{setselectedoption(requests.fetchTrending);setactive(true);}} >Trending</h2>
            <h2 className={`${active && "nav__option"}`} onClick={()=>{setselectedoption(requests.fetchTopRated);setactive(true);}}>Top Rated</h2>
            <h2 className={`${active && "nav__option"}`} onClick={()=>{setselectedoption(requests.fetcActionMovies);setactive(true);}}>Action</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcRomanceMovies)}>Romance</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcMysteryMovies)}>Mystery</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcScifiMovies)}>Sci-fi</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcWesternMovies)}>Western</h2>
            <h2 onClick={()=>setselectedoption(requests.fetcActionMovies)}>Animation</h2>
            <h2 onClick={()=>setselectedoption(requests.fetctvMovies)}>Movie</h2>
        </div>
     );
}
 
export default Nav;