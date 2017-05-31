import React from 'react'


const SearchForm = (props)=> {

	return (
			<div className="row">
				<form onSubmit={props.onSubmit} className="form-group has-feedback">
					<div className="col-xs-4">
			            <input type="text" name="title" className="form-control" placeholder="Enter Title" />
			        </div>
				</form>
				<i id="note-icon" onClick={props.note}><span className="glyphicon glyphicon-file"></span></i>
	        </div>
	)
}

export default SearchForm
