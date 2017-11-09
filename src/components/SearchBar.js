import React, { Component } from "react"
// const Component = React.Component;

import TextField from 'material-ui/TextField';

class SearchBar extends Component {
  render(){
    return (
      <TextField
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
      />
    )
  }
}

export default  SearchBar
