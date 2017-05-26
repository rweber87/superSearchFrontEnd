import React from 'react'

class SearchForm extends React.Component {

	constructor(){
		super()

		this.state = {
			title: '',
			notes: []
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const target = event.target;
    	const value = target.value;
    	const name = target.name;

		this.setState({
			[name]: value 
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit( this.state.title, this.state.notes)
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
			    	<div className="col-xs-4 form">
			    		<br/>
			    		<label>Title</label>
				    	<input name="title" className="form-control" placeholder="Enter Title" onChange={this.handleChange}/>
				    	<br/>
				    	<button value='Submit'>Submit</button>
			    	</div>
				</form>
			</div>
		)
	}

}

export default SearchForm