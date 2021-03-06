import axios from 'axios'

export function getYoutubeVideos(searchTerm){
    const API_KEY = "AIzaSyB9-C6isL_8dRIskc8JN2HXV8WttDD7Fws"
    const maxResults = 10
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=${maxResults}`
    return axios.get(url)
}

  // input search term returns wikipedia summary
  export function getWikiSummary(searchTerm){
    // let genResultsSample = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=Albert"
    let newSearchTerm = unpluralizeSearchTerm(searchTerm)
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${newSearchTerm}&origin=*`
    let wikiResult = axios.get(url).then( (response) => {
      let pages = response.data.query.pages
      let data = pages[Object.keys(pages)[0]]
      let summary = data.extract
      let wikiObj = ""
      var sent = "From other capitalisation: This is a redirect from a title with another method of capitalisation."
      if(!summary || summary.includes(sent)){
          wikiObj = {wiki: "Click logo for additional information or choose another search term", url: url }
      } else {
        wikiObj = {wiki: summary, url: url }
      }
      return wikiObj 
    })

    return wikiResult
  }

  function unpluralizeSearchTerm(searchTerm){
    if (searchTerm.length > 0) {
      let sentenceArray = searchTerm.split(" ")
    let lastWord = sentenceArray[sentenceArray.length-1]
    if(lastWord[lastWord.length-1] === "s" || lastWord[lastWord.length-1] === "S"){
      lastWord = lastWord.slice(0, lastWord.length - 1)
    }
    sentenceArray[sentenceArray.length - 1] = lastWord
    return sentenceArray.map( word => word[0].toUpperCase() + word.slice(1, word.length)).join(" ")
    }
  }

  //input search term returns array of photos
  export function getFlickrPhotos(searchTerm){
    const API_KEY = '6fa28d45fbf10f69eb12d77eaa1121ae'
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&text=${searchTerm}&extras=url_o&sort=interestingness-desc&safe_search=1`
    return axios.get(url)
  }

  export function getNotes(){
    return axios.get('http://localhost:3000/api/v1/note').then(res => res.data)
  }

  export function addNote(body, title){
    return axios.post('http://localhost:3000/api/v1/note', {body: body, search_term: title})
  }

  export function deleteNote(noteId){
    return axios({method: 'delete', url:'http://localhost:3000/api/v1/note' , data: {id: noteId}} )
  }

  export function editNote(id,body){
    return axios({method: 'patch', url:'http://localhost:3000/api/v1/note' , data: {id: id, body: body}} )
  }
