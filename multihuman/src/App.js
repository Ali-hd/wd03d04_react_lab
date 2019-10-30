import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'

var data = TMDB

export default class App extends Component {
  
  handleFaveToggle = () => {
    const faves = this.state.faves.slice()
    const filmIndex = this.state.faves.indexOf([faves, 0])
    if(filmIndex == -1){
      console.log("Adding [FILM NAME] to faves...")
      faves.push(faves)
      this.setState({faves})
    }else{
      console.log("Removing [FILM NAME] from faves...")
      faves.prototype.splice()
    }
  }

  

  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }

  render() {
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    return (
      <div className="film-library">
        {/* <h1>{data.films[1].title}</h1> */}
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing onFaveToggle={this.handleFaveToggle} films={this.state.films} faves={this.state.faves}/>
        </div>
        <FilmDetails current={this.state.current} data={data} />

      </div>
    )
  }
}

//https://image.tmdb.org/t/p/w500/
