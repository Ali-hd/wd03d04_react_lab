import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
import axios from 'axios';
import "./index.css";
import "./normalize.css";

var data = TMDB

export default class App extends Component {

  state = {
    films: TMDB.films,
    faves: [],
    current: {}
  }


  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;
    axios.get(url)
      .then(res => {
        console.log(`Fetching details for ${film.title}`);
        this.setState({ current: res.data })
      })
      .catch(err => {
        console.log(err);

      })

  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if (filmIndex == -1) {
      console.log("Adding [FILM NAME] to faves...")
      faves.push(film)

    } else {
      console.log("Removing [FILM NAME] from faves...")
      faves.splice(faves.indexOf(film), 1)
    }
    this.setState({ faves })
  }

  render() {
    this.handleFaveToggle = this.handleFaveToggle.bind(this)
    return (
      <div className="film-library">
        {/* <h1>{data.films[1].title}</h1> */}
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <FilmListing onFaveToggle={this.handleFaveToggle}
            films={this.state.films} faves={this.state.faves} 
            handleDetailsClick={this.handleDetailsClick}/>
        </div>
        <FilmDetails current={this.state.current} />

      </div>
    )
  }
}

//https://image.tmdb.org/t/p/w500/
