import React from 'react'


const SearchForm = (props)=> {

	return (
		<div className="row">
			<form onSubmit={props.onSubmit} className="form-group has-feedback">
					<div className="col-xs-4 form ">
						<label>Title</label>
						<input name="title" className="form-control" placeholder="Enter Title" />
						<i className="glyphicon glyphicon-search form-control-feedback"></i>
					</div>
			</form>
		</div>
	)
}

export default SearchForm
