import axios from 'axios'

export function getYoutubeVideos(searchTerm){
    const API_KEY = "AIzaSyB9-C6isL_8dRIskc8JN2HXV8WttDD7Fws"
    const maxResults = 20
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=${maxResults}`
    return axios.get(url)
}

  // input search term returns wikipedia summary
  export function getWikiSummary(searchTerm){
    // let genResultsSample = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=Albert"
    let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=${searchTerm}&origin=*`
    axios.get(url).then( response => {
      let pages = response.data.query.pages
      let data = pages[Object.keys(pages)[0]]
      let summary = data.extract
      let title = data.title
      console.log("wiki result: ", data)
      console.log("wiki summary: ", summary);
    })
  }

  //input search term returns array of photos
  export function getFlickrPhotos(searchTerm){
    const API_KEY = '6fa28d45fbf10f69eb12d77eaa1121ae'
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&text=${searchTerm}&extras=url_o`
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
