import React from 'react'
import Note from './Note'
import NoteListerHeader from './NoteListerHeader'
import NoteForm from './NoteForm'

export default class NoteLister extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			notes: ['sample note 1',
							'sample note 2',
							'sample note 3',
							'sample note 4'
						 ],
			noteCount: 0
		}
	}

	handleAddNote(body){
		this.setState({
			notes: [...this.state.notes, body],
			noteCount: this.state.noteCount + 1
		})
	}

	handleDeleteNote(note){
		console.log("in handle delete note")
		console.log("in handle note: ", note)
		this.setState({
			notes: this.state.notes.filter((n)=> n !== note),
			noteCount: this.state.noteCount - 1
		})
	}

	componentDidMount(){
		this.setState({
			noteCount: this.state.notes.length
		})
	}

	render(){
		const notesDisplay = this.state.notes.map((note, i) =>
		<li>
			<Note body={note} key={i} onDelete={this.handleDeleteNote.bind(this)}/>
		</li>)

		return (
			<div className="noteList-container">

				<div className="noteList-header">
					<NoteListerHeader noteCount={this.state.noteCount}/>
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
