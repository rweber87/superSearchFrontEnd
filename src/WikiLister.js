import React from 'react'
import Note from './notes/Note'
import {getWikiSummary} from './api'

class WikiLister extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			wikiResults: ''
		}
	}

  componentWillReceiveProps(nextProps){
  	this.handleWikiAPI(nextProps.title)
  }

	handleWikiAPI(search){
		console.log('called wiki api')
			getWikiSummary(search)
	    .then( response =>
	      this.setState({
	        wikiResults: response
	    }))


    }


	render() {
		const wiki = this.state.wikiResults
		return(
			<div className="row">
			    <div className="col-md-6 col-sm-3 wikipedia">
			      <a href={wiki.url} ><img className="wikipedia-logo" src="https://www.wholewhale.com/wp-content/uploads/Picture-42.png" /></a>
			      <p className="wiki-results">{wiki.wiki}</p>
			      <p></p>
			    </div>
			</div>
		)
	}

}

export default WikiLister
