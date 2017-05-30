import React from 'react'

class NoteForm extends React.Component{
	constructor () {
		super()

		this.state = {
			body: ''
		}
	}

	handleChange(event){
		const value = event.target.value;
		this.setState({
			body: value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit( this.state.body)
		this.setState({
			body: ''
		})
	}


	render() {
		return(
			<div>
				<form id="noteForm-form" onSubmit={this.handleSubmit.bind(this)} autoComplete="off">
					<input type="textbox" id="noteForm-input" onChange={this.handleChange.bind(this)} name="note" value={this.state.body} />
				</form>
			</div>
		)
	}

}

export default NoteForm
