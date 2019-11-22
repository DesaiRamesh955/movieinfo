import React, { Component } from "react";
import { connect } from "react-redux";
import { getOneMovie } from "../actions/action";
import {Link} from 'react-router-dom'

class movie extends Component {
  componentDidMount() {
    this.props.getOneMovie(this.props.match.params.id);
  }

  render() {
    let { movie } = this.props;
    console.log(movie);
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1 className="text-center">{movie.Title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4" id="poster">
            <div className="poster">
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          </div>
          <div className="col-sm-12 col-md-8">
            <div>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>
                    <big>Actors</big> : {movie.Actors}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Director</big> : {movie.Director}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Genre</big> : {movie.Genre}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Language</big> : {movie.Language}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Ratings</big> : {movie.imdbRating}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Released</big> : {movie.imdbRating}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Runtime</big> : {movie.Runtime}
                  </strong>
                </li>
                <li className="list-group-item">
                  <strong>
                    <big>Writer</big> :{movie.Writer}
                  </strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row jumbotron mt-3">
          <div className="col-12">
            <h4>Detail : </h4>
            <p>{movie.Plot}</p>
            <a className="btn btn-success" href={`https://www.imdb.com/title/${movie.imdbID}/`}>Show imdb</a>
            <Link className="btn btn-outline-success ml-2" to="/">Go back</Link>
          </div>
        </div>
      </div>
    );
  
  }
}
const mapStateToProps = state => ({
  movie: state.movie.movie
});
export default connect(mapStateToProps, { getOneMovie })(movie);
