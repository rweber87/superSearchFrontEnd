import React from 'react'
import Note from './Note'
import NoteListerHeader from './NoteListerHeader'
import NoteForm from './NoteForm'
import {getNotes, addNote, deleteNote} from '../api'


export default class NoteLister extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			notes: ['sample note 1','sample note 2','sample note 3']
		}
	}

	handleAddNote(body){ 
	  // console.log("adding a new note!", body)
	  	addNote(body, this.props.noteTitle)
	    .then(res => this.setState(prevState => ({
	      notes: [...prevState.notes, res.data]
	    })))
	}
	

	handleDeleteNote(id){
		// console.log(id)
    deleteNote(id)
    .then(res => this.setState(prevState => ({
      notes: prevState.notes.filter(note => note.id !== res.data.id)
    })))}

   handleEditNote(id){
    console.log('editing --> ', id)
  }


	componentDidMount(){
		getNotes()
    .then(data => this.setState({
      notes: data
    }))
	
	}

	render(){
		const filtered = this.state.notes.filter(note => note.search.search_term === this.props.noteTitle)
		const notesDisplay = filtered.map((note, i) => <li key={i}><Note onEdit={this.handleEditNote.bind(this)} onDelete={this.handleDeleteNote.bind(this)} note={note}/></li> )

		return (
			<div className="noteList-container">
				<div className="noteList-header">
					<NoteListerHeader term={this.props.noteTitle} noteCount={notesDisplay.length}/>
			  	</div>
				<div className="noteForm-container">
					{this.props.noteTitle ? <NoteForm onSubmit={this.handleAddNote.bind(this)}/> : null }
					<div className = "notes-container">
						<ul>
							{ notesDisplay }
					  </ul>
					</div>
				</div>
			</div>			
		)
	}
}

			