import React from 'react'

const SearchForm = (props)=> {

	return (
		<div>
			<form onSubmit={props.onSubmit}>
					<div className="col-xs-4 form">
						<br/>
						<label>Title</label>
						<input name="title" className="form-control" placeholder="Enter Title" />
						<br/>
						<button value='Submit'>Submit</button>
					</div>
			</form>
		</div>
	)
}

export default SearchForm
