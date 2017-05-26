import React, { Component } from 'react';
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './noteLister'
import Note from './Note'
import NoteForm from './NoteForm'
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
      ]
     }
  }
  
  handleAddTitle(title){
    console.log("adding a new title!")
    this.setState({
      title: title
    })  
  }

  handleAddNote(body){
    console.log("adding a new note!")
    this.setState({
      notes: [...this.state.notes, body]
    })  
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>
        <NoteLister notes={this.state.notes}/>
        <NoteForm onSubmit={this.handleAddNote.bind(this)} />
        <Note notes={this.state.notes}/>
      </div>
    );
  }
}

export default App;
