import React, { Component } from 'react';
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './noteLister'
import Note from './Note'
import NoteForm from './NoteForm'
import { getYoutubeVideos, getWikiSummary, getFlickrPhotos }  from './api'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {

  constructor(){
    super()
     this.state = {
      title: '',
      notes: ['sample string1',
              'sample string2',
              'sample string3',
              'sample string4'
      ],
      wikiResults: ''
     }
  }
  
  handleAddTitle(title){
    getWikiSummary(title)
    .then( response => 
      this.setState({
        title: title,
        wikiResults: response
      }))
  }

  handleAddNote(body){
    console.log("adding a new note!", body)
    this.setState({
      notes: [...this.state.notes, body]
    })  
  }

  

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row forms">
            <div className="col-md-6 note-form">
              <NoteForm onSubmit={this.handleAddNote.bind(this)} />
            </div>
            <div className="col-md-6 search-form">
              <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>
            </div>  
          </div>
          <div className="row lister">
            <NoteLister notes={this.state.notes} apiValue={this.state.wikiResults} />
          </div>
          <Note notes={this.state.notes}/>
        </div>
      </div>
    );
  }
}

export default App;
