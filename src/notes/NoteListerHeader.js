	import React from 'react'

const NoteListerHeader = (props) => {

	const noteCount = props.noteCount
	return(
		<div>
      <div className="noteList-title-wrapper">
        <img src="" className="noteList-icon"/>
        <h3 id="note-title">{props.term}</h3>
        <div id="note-count">{noteCount}</div>
      </div>
		</div>
	)

}

export default NoteListerHeader
