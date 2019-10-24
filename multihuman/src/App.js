import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
var data =  TMDB

export default class App extends Component {
  render() {
    return (
      <div className="film-library">
      {/* <h1>{data.films[1].title}</h1> */}
       <div className="film-list">
         <h1 className="section-title">FILMS</h1> 
      {data.films.map(item=>   <FilmListing data={item}/>)}

      </div>
  <FilmDetails data={data}/>
  
  </div>
    )
  }
}

//https://image.tmdb.org/t/p/w500/
