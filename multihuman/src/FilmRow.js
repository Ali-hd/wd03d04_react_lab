import React, { Component } from 'react'
import Fave from "./Fave"
import FilmPoster from './FilmPoster'

export default class FilmRow extends Component {
    render() {
        return (
            <div>
                <div className="film-row" onClick={this.props.handleDetailsClick}>
                <FilmPoster filmPoster={this.props.film.poster_path}/>
                    <div className="film-summary">
                        <h1 >{this.props.film.title}</h1>
                                <p>{this.props.film.release_date}</p>
                        <Fave onFaveToggle={this.props.onFaveToggle} 
                        isFave={this.props.isFave}/>

                    </div>
                </div>
            </div>
        )
    }
}
