import React, { Component } from "react";
import {connect} from 'react-redux'
import {SearchMovies} from '../actions/action'

import Showmovies from "./showMovies";
class search extends Component {
  constructor(props){
    super(props)
    this.state = {
      moviename: null
    };
  }
  componentDidUpdate(){
    this.props.SearchMovies(this.state.moviename);
  }

 
  movieSearch = e => {
   this.setState({moviename:e.target.value})
  }
  

  render() {
    return (
     <React.Fragment> 
      <div>
        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <div className="jumbotron">
                <form id="moviesearch">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="moviename"
                      placeholder="Search movie..."
                      onChange={this.movieSearch}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
       {<Showmovies />}
      </React.Fragment>
    );
  }
}



export default connect(null,{SearchMovies})(search);
