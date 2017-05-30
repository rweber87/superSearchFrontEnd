import React from 'react'

const NoteEditForm = (props) => {
	return(
		<div className="note card">
			<div className="note-body">
				<div className="note-text">
					<form onSubmit={props.onSubmit}>
						<input name="duncandevs" type="text" defaultValue={props.body}/>
					</form>
				</div>
			</div>
		</div>
	)
}
export default NoteEditForm