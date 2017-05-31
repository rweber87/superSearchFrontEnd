import React from 'react'

const NoteListerHeader = (props) => {

	const noteCount = props.noteCount
	return(

      <div className="navbar navbar-inverse bg-primary noteList-title-wrapper">
        <img alt="" className="noteList-icon"/>
        <h3 id="note-title">{props.term}</h3>
        <div id="note-count">{noteCount}</div>
      </div>

	)

}

export default NoteListerHeader
