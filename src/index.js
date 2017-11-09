import React from 'react'
import ReactDom from 'react-dom'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import SearchBar from './components/SearchBar'

const API_KEY = 'AIzaSyBgaFONm7WRYrQiJU_WgNwNTRs2WRje2j8';

const App =  () => {
  return (
    <MuiThemeProvider>
      <SearchBar></SearchBar>
    </MuiThemeProvider>
  )
};

ReactDom.render(<App />, document.querySelector(".container"));