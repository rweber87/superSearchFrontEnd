import React from 'react'
import {getWikiSummary} from './api'

class WikiLister extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			wikiResults: ''
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.title.length > 0){
	  	this.handleWikiAPI(nextProps.title)
    }
	}

	handleWikiAPI(search){
		getWikiSummary(search)
	    .then( response =>
	      this.setState({
	        wikiResults: response
	    }))
    }


	render() {
		const wiki = this.state.wikiResults
		const url = "https://en.wikipedia.org/wiki/" + this.props.title
		return(
			<div className="row">
			    <div className="col-md-6 col-sm-3 wikipedia">
			      <a href={url} ><img alt="" className="wikipedia-logo" src="http://melissaagnes.com/wp-content/uploads/2015/01/wikipedia-logo-201x200.png" /></a>
			      <p className="wiki-results">{wiki.wiki}</p>
			      <p></p>
			    </div>
			</div>
		)
	}

}

export default WikiLister
