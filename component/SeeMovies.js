import React from "react";
import { Link } from "react-router-dom";
class SeeMovies extends React.Component {
  render() {
    return (
     
          <div className="col-sm-6 col-xs-12 col-md-3">
            <div className="img">
              <img
                src={this.props.value.Poster}
                alt={this.props.Title}
                className="img-responsive"
              />
            </div>
            <div className="content">
              <h5>{this.props.value.Title}</h5>
            </div>
            <div className="content">
              <Link
                to={`movie/${this.props.value.imdbID}`}
                className="btn btn-success btn-block btn-sm"
              >
                Movie info
              </Link>
            </div>
          </div>
        
    )
  }
}

export default SeeMovies;
