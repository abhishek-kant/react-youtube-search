import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from "./components/VideoList"
import VideoDetail from './components/VideoDetail'
import _ from 'lodash'


const API_KEY = 'AIzaSyBgaFONm7WRYrQiJU_WgNwNTRs2WRje2j8';





class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null
    }

  this.searchVideo("investing")
  }

  searchVideo(term){
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({ videos, selectedVideo: videos[0] })
    })
  }

  render(){
    const { videos, selectedVideo } = this.state;
    const videoSearch = _.debounce((term)=>{  this.searchVideo(term) }, 300);
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar onSearchTermChange={ videoSearch }></SearchBar>
          <VideoDetail video = { selectedVideo } ></VideoDetail>
          <VideoList selectedVideo={ selectedVideo } handleVideoSelect={ (_video) => this.setState({selectedVideo: _video}) }  videos={ videos }></VideoList>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDom.render(<App />, document.querySelector(".container"));