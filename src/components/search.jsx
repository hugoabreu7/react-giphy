import React, { Component } from 'react';

class SearchForm extends Component {
  handleChange = (event) => {
    this.props.search(event.target.value);
  }

  render() {
    return(
      <input type="text" className="form-search form-control"
      onChange={this.handleChange}/>
      );
  }
}

export default SearchForm;
