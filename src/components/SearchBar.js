import React, { Component } from "react"
// const Component = React.Component;
import TextField from 'material-ui/TextField';


class SearchBar extends Component {

  constructor(props){
    super(props)

    this.state = { term: '' }
  }

  handleTextChange(term){
    this.setState({term})
    this.props.onSearchTermChange(term);

  }

  render(){
    return (
      <TextField
        value={this.state.term}
        hintText="Hint Text"
        floatingLabelText="Floating Label Text"
        onChange={ event =>  this.handleTextChange(event.target.value) }
      />
    )
  }


}

export default  SearchBar
