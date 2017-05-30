import React from 'react'

const Note = (props) => {
	// console.log(props.onDelete)
	const body = props.body
	return(
		<div key={props.key}>
			{body}
			<button onClick={() => props.onEdit(props.id)}>Edit</button>
			<button onClick={() => props.onDelete(props.id)}>Delete</button>
		</div>
	)

}

export default Note