import axios from 'axios'

export function getYoutubeVideos(searchTerm){
    const API_KEY = "AIzaSyB9-C6isL_8dRIskc8JN2HXV8WttDD7Fws"
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&q=${searchTerm}&type=video&maxResults=10`
    axios.get(url)
      .then( response => {
        let videos = response.data.items.map(function(video){
          return  Object.assign(video.snippet, video.id);
        })
        console.log("youtube videos: ",videos)
      })
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
      return summary
    })
    return wikiResult
  }

  function unpluralizeSearchTerm(searchTerm){
    let sentenceArray = searchTerm.split(" ")
    let lastWord = sentenceArray[sentenceArray.length-1]
    if(lastWord[lastWord.length-1] === "s" || lastWord[lastWord.length-1] === "S"){
      lastWord = lastWord.slice(0, lastWord.length - 1)
    }
    sentenceArray[sentenceArray.length - 1] = lastWord
    return sentenceArray.map( word => word[0].toUpperCase() + word.slice(1, word.length)).join(" ")
  }

  //input search term returns array of photos
  export function getFlickrPhotos(searchTerm){
    const API_KEY = '6fa28d45fbf10f69eb12d77eaa1121ae'
    let url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&format=json&nojsoncallback=1&text=${searchTerm}&extras=url_o`
    axios.get(url).then(response => {
      let photos = response.data.photos.photo.map(function(photo){
        return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
      })
      console.log("flickr response: ", response.data.photos.photo)
      console.log("flickr photos: ", photos)
    })
  }
