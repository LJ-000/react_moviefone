import './App.css';
import { Component } from 'react';
import SearchMovies from './components/searchMovies'

class App extends Component {

  render() {
    return (
      <div className="container">
        <h1 className="title">React Moviefone</h1>
        <SearchMovies/>
      </div>
    )
  }
 }

export default App;
