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
		console.log("form value: ", value)
		this.setState({
			body: value 
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit( this.state.body)
	}

	

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
			    	<div className="col-xs-4 form">
			    		<br/>
			    		<label>Note</label>
				    	<input name="note" className="form-control" placeholder="Enter Title" onChange={this.handleChange.bind(this)}/>
				    	<br/>
				    	<button value='Submit'>Submit</button>
			    	</div>
				</form>
			</div>
		)
	}

}

export default NoteForm