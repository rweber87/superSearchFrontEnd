import React from 'react'
import Note from './Note'

function NoteLister(props) {

	const notesDisplay = props.notes.map((note, i) => <li><Note body={note} key={i}/></li> )
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