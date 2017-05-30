import React from 'react'
import Note from './Note'
import NoteListerHeader from './NoteListerHeader'
import NoteForm from './NoteForm'
import {getNotes, addNote, deleteNote} from '../api'


export default class NoteLister extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			notes: ['sample note 1','sample note 2','sample note 3'],
			noteCount: 0
		}
	}

  handleAddNote(body){ 
  // console.log("adding a new note!", body)
  	addNote(body, this.props.noteTitle)
    .then(res => this.setState(prevState => ({
      notes: [...prevState.notes, res.data],
      noteCount: this.state.notes.length
    })))
  }
	

	handleDeleteNote(id){
		// console.log(id)
    deleteNote(id)
    .then(res => this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== res.data.id),
      noteCount: this.state.notes.length
    })))}

   handleEditNote(id){
    console.log('editing --> ', id)
  }


	componentDidMount(){
		getNotes()
    .then(data => this.setState({
      notes: data,
      noteCount: this.state.notes.length
    }))
	
	}

	render(){
		const filtered = this.state.notes.filter(note => note.search.search_term === this.props.noteTitle)
		console.log(this.state)

	const notesDisplay = filtered.map((note, i) => <li key={i}><Note onEdit={this.handleEditNote.bind(this)} onDelete={this.handleDeleteNote.bind(this)} note={note}/></li> )

		return (
			<div className="noteList-container">

				<div className="noteList-header">
					<NoteListerHeader term={this.props.noteTitle}noteCount={this.state.noteCount}/>
			  </div>

				<ul className = "notes-container">
					{ notesDisplay }
			  </ul>

				<div className="noteForm-container">
					<NoteForm onSubmit={this.handleAddNote.bind(this)}/>
				</div>

			</div>
		)
	}
}
