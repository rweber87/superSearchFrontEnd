import React from 'react'
import Note from './Note'

function NoteLister(props) {
	const wikiResults = props.apiValue.wikiResults.wiki
	const url = props.apiValue.wikiResults.url
	const searchUrl = 'https://en.wikipedia.org/wiki/' + props.apiValue.title
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
		      <a href={searchUrl} ><img className="wikipedia-logo" src="https://www.wholewhale.com/wp-content/uploads/Picture-42.png" /></a>
		      <p className="wiki-results">{wikiResults}</p>
		      <p></p>
		    </div>
		</div>
	)
	


}

export default NoteLister