import React, { Component } from 'react';
import axios from 'axios'
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './noteLister'
import Note from './Note'
import NoteForm from './NoteForm'
import {getNotes, addNote, deleteNote} from './api'
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
    // console.log("adding a new title!")
    this.setState({
      title: title
    })  
  }

  handleAddNote(body){ 
    // console.log("adding a new note!", body)
    addNote(body, this.state.title)
    .then(res => this.setState(prevState => ({
      notes: [...prevState.notes, res.data]
    })))
  }

  handleEditNote(id){
    console.log('editing --> ', id)
  }

  handleDeleteNote(id){
    deleteNote(id)
    .then(res => this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.body !== res.data.body)
    })))

  }
// console.log(res.data.body)


  componentDidMount(){
    getNotes()
    .then(data => this.setState({
      notes: data
    }))

    // Gotta filter...
    // .then(data => data.filter(note => this.setState(prevState => {notes: note.search.search_term === prevState.title})))
      
  }

  

  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <NavBar />
        <SearchForm onSubmit={this.handleAddTitle.bind(this)}/>
        <NoteLister notes={this.state.notes} noteTitle={this.state.title} onEdit={this.handleEditNote.bind(this)} onDelete={this.handleDeleteNote.bind(this)}/>
        <NoteForm onSubmit={this.handleAddNote.bind(this)} />
      </div>
    );
  }
}

export default App;
