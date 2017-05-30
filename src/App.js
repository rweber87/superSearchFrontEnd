import React, { Component } from 'react';
import axios from 'axios'
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './notes/NoteLister'
import PhotoLister from './photos/PhotoLister'
import VideoLister from './videos/VideoLister'
import WikiLister from './WikiLister'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Switch, Route, Link} from 'react-router-dom'

class App extends Component {

  constructor(){
    super()
     this.state = {
      title: '',
      toggleBoolean: false
     }
  }

  handleAddTitle(event){
    event.preventDefault()
    let title = event.target.title.value
    this.setState({
      title: title
    })
  }

  toggleNavbar(event){
    event.preventDefault()
    const value = this.state.toggleBoolean ? false : true
    this.setState({
      toggleBoolean: value
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NavBar toggle={this.toggleNavbar.bind(this)} />
        <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>
        <div className="links">
          <Link className="navbar-brand" to="/photos">Photos</Link>
          <Link className="navbar-brand" to="/videos">Videos</Link>
        </div>
        <Switch>
          <div className="row">
            <div className="col-md-8">
              <Route path = '/photos' render ={ () => <PhotoLister searchTerm={this.state.title} />}/>
              <Route path = '/videos' render ={ () => <VideoLister searchTerm={this.state.title} />}/>
            </div>
            <div className="col-md-4">
              <WikiLister title={this.state.title}  />
            </div>
          </div>
        </Switch>
        {this.state.toggleBoolean ? <NoteLister noteTitle={this.state.title}/> : ""}
      </div>
    );
  }
}

export default App;



