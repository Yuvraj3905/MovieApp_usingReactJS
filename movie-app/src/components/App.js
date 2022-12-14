import { render } from "@testing-library/react";
import React from "react";
import {data} from '../data';
import MovieCard from './MovieCard';
import Navbar from './Navbar';

class App extends React.Component {
  componentDidMount() {
    //make api called
    //dispatch action to
    this.props.store.dispatch({
      type:'ADD_MOVIES',
      movies:data
    });
    console.log('STATE', this.props.store.getState());
  }
  render() {
  const movies=this.props.store.getState();
  return (
    <div className="App">
       <Navbar />
       <div className="main">
        <div className="tabs">
          <div className="tab">
           Movies
          </div>
          <div className="tab">
            Favorites
            </div>
            </div>
            <div className="list">
              {movies.map((movie, index)=>(
                <MovieCard movie={movie} key={index}/>
              ))}
              </div>
        
       </div>
    </div>
  );
}
}


export default App;
