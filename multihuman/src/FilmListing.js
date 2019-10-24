import React from 'react'

const FilmListing = (props) => {
    return (
        <div>
         
     <div>
    <div className="film-row">
    <img src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`}/>
    <div className="film-summary">
    <h1 >{props.data.title}</h1>
    <p>{props.data.release_date}</p>
</div>
    </div>
    </div>
  </div>
    
  

      
    )
}

export default FilmListing
