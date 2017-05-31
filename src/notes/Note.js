import React from 'react'
import NoteEditForm from './NoteEditForm'

class Note extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			note: this.props.note,
			editMode: false
		}
	}

	toggleEdit(){
		this.setState({
			editMode: !this.state.editMode
		})
	}

	handleEdit(event){
		this.setState({
			editMode: !this.state.editMode
		})
		const newInput= event.target.duncandevs.value
		this.props.onEdit(this.state.note.id, newInput)
	}


	render(){
		if(!this.state.editMode) {
			return(
				<div className="note card">
					<div className="note-body">
						<div className="note-text">
							{ this.props.note.body }
						</div>
					</div>
					<div className="form-buttons">
						<button onClick={this.toggleEdit.bind(this)}>Edit</button>
						<button onClick={() => this.props.onDelete(this.state.note.id)}>Delete</button>
					</div>
				</div>
			)
		} else {
			return(
				<div>
				<NoteEditForm body={this.props.note.body} onSubmit={this.handleEdit.bind(this)}/>
				</div>
			)
		}
		
	}
}

export default Note
// <button onClick={() => this.props.onEdit(this.state.note.id)}><Link to="/edit">Edit</Link></button>


