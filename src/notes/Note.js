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
		this.props.onEdit(this.props.note.id, newInput)
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
						<button className="glyphicon glyphicon-pencil"onClick={this.toggleEdit.bind(this)}></button>
						<button className="glyphicon glyphicon-remove" onClick={() => this.props.onDelete(this.props.note.id)}></button>
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


