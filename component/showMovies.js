import React, { Component } from "react";
import { connect } from "react-redux";
import SeeMovies from './SeeMovies'
class showMovies extends Component {

  render() {
     let {movieList}= this.props

     let content = movieList.Response === 'True'? movieList.Search.map((res,index) => (<SeeMovies key={index} value={res} />)) :null
    return (
      <div className="container">
        <div className="row mt-2">
          {content}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movie.movies
});
export default connect(mapStateToProps)(showMovies);
