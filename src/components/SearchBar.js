import React, { Component } from "react"
// const Component = React.Component;
import TextField from 'material-ui/TextField';


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = { term: 'lol' }
  }

  render(){
    return (
      <TextField
        value={this.state.term}
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
        onChange={ event => this.setState({term: event.target.value}) }
      />
    )
  }


}

export default  SearchBar
