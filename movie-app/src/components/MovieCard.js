
import React from "react";

class MovieCard extends React.Component {
    render(){
        const{movie}=this.props;
  return (
    <div className="movie-card">
       <div className="left">
        <img alt="movie-poster" src={movie.Poster} />
       </div>
       <div className="right">
          <div className="title">
            {movie.Title}
          </div>
          <div className="plot">
            {movie.Plot}
          </div>
          <div className="footer">
            <div className="rating">
                {movie.imbdRating}
            </div>
            <button className="fav-btn">Favorite</button>
          </div>
       </div>
    </div>
  );
 }
}

export default MovieCard;
