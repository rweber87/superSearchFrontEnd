import React from 'react'

const Note = (props) => {

	const body = props.body
	return(
		<div key={props.key}>
			{body}
		</div>
	)

}

export default Note