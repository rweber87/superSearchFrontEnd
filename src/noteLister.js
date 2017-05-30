import React from 'react'
import Note from './Note'

function NoteLister(props) {
		
	// const filtered = props.notes.filter(note => note.search.search_term === props.noteTitle)
	

	// const notesDisplay = filtered.map((note, i) => <li><Note onEdit={props.onEdit} onDelete={props.onDelete} body={note.body} id={note.id}/></li> )
	// debugger
	return(
		<div className="col-xs-12 note-container">
			<h1>{props.title}</h1>
			<ul>
			{notesDisplay}
			</ul>
		</div>
	)
	


}

export default NoteLister