import React, { Component } from 'react';
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './notes/NoteLister'
import PhotoLister from './photos/PhotoLister'
import VideoLister from './videos/VideoLister'
import WikiLister from './WikiLister'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


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
          <div className="row">
            <div className="col-md-6">
              <PhotoLister searchTerm={this.state.title} />
              <VideoLister searchTerm={this.state.title} />
            </div>
            <div className="col-md-4">
              <WikiLister title={this.state.title}  />
            </div>
          </div>
        {this.state.toggleBoolean ? <NoteLister noteTitle={this.state.title}/> : ""}
      </div>
    );
  }
}

export default App;



