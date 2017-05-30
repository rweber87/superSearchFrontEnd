import React from 'react'

class Note extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			note: this.props.note
		}
	}



	render(){
		console.log('note added')
		return(
			<div className="note card">
				<div className="note-body">
					<div className="note-text">
						{ this.props.note.body }
						<button onClick={() => this.props.onEdit(this.state.note.id)}>Edit</button>
						<button onClick={() => this.props.onDelete(this.state.note.id)}>Delete</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Note
