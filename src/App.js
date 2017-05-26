import React, { Component } from 'react';
import SearchForm from './searchForm'
import NavBar from './NavBar'
import NoteLister from './noteLister'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


class App extends Component {
  constructor(){
    super()
     this.state = {
      title: '',
      notes: ''
     }
  }
  
  handleAddNote(title, notes){
    console.log("adding a new note!")
    this.setState({
      title: title,
      notes: notes
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <SearchForm onSubmit={this.handleAddNote.bind(this)}/>
        <NoteLister notes={this.state}/>
      </div>
    );
  }
}

export default App;
