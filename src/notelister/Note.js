import React from 'react'

const Note = (props) => {

	const body = props.body
	return(
		<div className="note card">
			<div className="note-body">
				<div className="note-text">
					{ body }
				</div>
			</div>
		</div>
	)

}

export default Note
