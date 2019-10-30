import React, { Component } from 'react'
import Fave from "./Fave"

export default class FilmRow extends Component {
    render() {
        return (
            <div>
                <div className="film-row" >
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.film.poster_path}`} />
                    <div className="film-summary">
                        <h1 >{this.props.film.title}</h1>
                                <p>{this.props.film.release_date}</p>
                        <Fave onFaveToggle={this.props.onFaveToggle} />

                    </div>
                </div>
            </div>
        )
    }
}
