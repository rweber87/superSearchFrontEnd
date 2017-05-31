import React from 'react'

const NoteEditForm = (props) => {
	return(
		<div className="note card">
			<div className="note-body">
				<div className="note-text">
					<form onSubmit={props.onSubmit} className="form-group has-feedback">
						<input name="duncandevs" className="form-control" type="text" defaultValue={props.body}/>
						<i className="glyphicon glyphicon-pencil form-control-feedback"></i>
					</form>
				</div>
			</div>
		</div>
	)
}
export default NoteEditForm