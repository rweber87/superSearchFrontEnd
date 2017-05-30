import React from 'react'
import Note from './Note'

function NoteLister(props) {
	const wikiResults = props.apiValue
	const notesDisplay = props.notes.map((note, idx) => <tr key={idx}><Note body={note} /></tr> )
	return(
		<div className="row">
		    <div className="col-md-6 col-sm-3 notes">
		      <h2>Notes</h2>	
		      <table className="table table-striped">
		      	{notesDisplay}
		      </table>
		    </div>
		    <div className="col-md-6 col-sm-3 wikipedia">
		      <h2>Wikipedia Information</h2>
		      <p>{wikiResults}</p>
		      <p></p>
		    </div>
		</div>
	)
	


}

export default NoteLister