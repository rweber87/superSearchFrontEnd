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
		this.setState({body: ''})
	}

	render() {
		return(
			<div>
				<form className="note-form" onSubmit={this.handleSubmit.bind(this)}>
			    	<div className="col-md-6 col-md-offset-3 form">
			    		<br/>
			    		<label>Note</label>
				    	<input type="text-box" value={this.state.body}name="note" className="form-control" placeholder="Enter A Note" onChange={this.handleChange.bind(this)}/>
				    	<br/>
				    	<button value='Submit'>Submit</button>
			    	</div>
				</form>
			</div>
		)
	}

}

export default NoteForm