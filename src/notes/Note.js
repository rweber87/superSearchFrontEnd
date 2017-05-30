import React from 'react'

class Note extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			body: this.props.body
		}
	}

	handleDelete(event){
		event.preventDefault()
		this.props.onDelete(this.state.body)
	}

	render(){
		return(
			<div className="note card">
				<div className="note-body">
					<div className="note-text">
						{ this.state.body }
						<div onClick={this.handleDelete.bind(this)}>delete</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Note
