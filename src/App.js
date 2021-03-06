import React, { Component } from 'react';

import SearchForm from './searchForm'
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
     this.shiftViewPort = this.shiftViewPort.bind(this)
  }

  handleAddTitle(event){
    event.preventDefault()
    let title = event.target.title.value
    this.setState({
      title: title
    })
  }

  toggleNotes(event){
    event.preventDefault()
    const value = this.state.toggleBoolean ? false : true
    this.setState({
      toggleBoolean: value
    })
    this.shiftViewPort()
  }

  shiftViewPort() {
    if(!this.state.toggleBoolean){
      document.body.style.transform ="translateX(0px)"
    } else {
      document.body.style.transform ="translateX(170px)"
    }
  }


  render() {
    return (
      <div className="App">
        <div>
          <SearchForm onSubmit={this.handleAddTitle.bind(this)} note={this.toggleNotes.bind(this)}/>
        </div>
          <div className="row content">
            <div className="col-md-6">
              <PhotoLister searchTerm={this.state.title} />
              <VideoLister searchTerm={this.state.title} />
            </div>
            <div className="col-md-5">
              <WikiLister title={this.state.title}  />
            </div>
          </div>
        {this.state.toggleBoolean ? <NoteLister noteTitle={this.state.title}/> : ""}
      </div>
    );
  }
}

export default App;



