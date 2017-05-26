import React from 'react'

function NoteLister({notes}) {
	
	console.log(notes)
	
	return(
		<div className="note-container">
			<h1>{notes.title}</h1>
			<h1>{notes.notes}</h1>
		</div>
	)
	


}

export default NoteLister