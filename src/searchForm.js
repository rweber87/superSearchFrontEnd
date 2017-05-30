import React from 'react'

class SearchForm extends React.Component {

	constructor(){
		super()

		this.state = {
			title: '',
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		const value = event.target.value;
		this.setState({
			title: value 
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.onSubmit( this.state.title )
		this.setState({title: ''})
		
	}

	render() {
		return(
			<div>
				<form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
			    	<div className="col-md-6 col-md-offset-3 form">
			    		<br/>
			    		<label>Title</label>
				    	<input name="title" type='text' value={this.state.title}className="form-control" placeholder="Enter Title" onChange={this.handleChange}/>
				    	<br/>
				    	<button value='Submit'>Submit</button>
			    	</div>
				</form>
			</div>
		)
	}

}

export default SearchForm