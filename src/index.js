import React from 'react'
import ReactDom from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import YTSearch from 'youtube-api-search'
import SearchBar from './components/SearchBar'
import VideoList from "./components/VideoList"


const API_KEY = 'AIzaSyBgaFONm7WRYrQiJU_WgNwNTRs2WRje2j8';





class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      videos: []
    }
    YTSearch({key: API_KEY, term: "lol"}, (videos) =>{
      this.setState({ videos })
      console.log(videos)
    })

  }
  render(){
    const { videos } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar></SearchBar>
          <VideoList videos={ videos }></VideoList>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDom.render(<App />, document.querySelector(".container"));