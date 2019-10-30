// import React from 'react'
import FilmRow from './FilmRow'

import React, { Component } from 'react'


export default class FilmListing extends Component {

    

    state = {
        filter: 'all'
    }
    handleFilterClick = (filter) => {
        this.setState({
            filter: filter
        })
        console.log('etting filter to ');
    }

    handleDetailsClick = (film) => {
        console.log('booooooiii ');
    }

    render() {
        
        const allFilms = this.props.films.map((film) => {
            return (
            <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={() => this.props.onFaveToggle(film)}
            // isFave = 
            />
          )
          })
        return (
            <div>
                <div className="film-list">
                    <h1 className="section-title">FILMS</h1>
                    <div className="film-list-filters">
                        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : 'all'}`} onClick={() => this.handleFilterClick('all')}>
                            ALL
                        <span className="section-count">0
                        </span>
                        </div>
                        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('faves')}>
                            FAVES
                        <span className="section-count" >0</span>
                        </div>
                    </div>           
                    <div>
                    {allFilms}
                    </div>
                </div>

            </div>
        )
    }
}
