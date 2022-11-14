import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      CurrentSearch: '',
      ContactList: {},
    };
  }
  //builtin function, that says working in every component thats rendering the components
  componentDidMount() {
    this.setState({
      ContactList: this.props.data,
    });
  }
  //function that taking the input value and searching the names thats includes these characters and filtering it by alphabetical order by parent componenet(TopBar.js) to (Main.js)
  handleSearch = event => {
    this.setState({
      CurrentSearch: event.target.value,
    });
    let newList = {};
    if (event.target.value !== '') {
      newList = Object.keys(this.props.data).reduce((acc, currentKey) => {
        if (
          this.props.data[currentKey].Name.trim()
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
        ) {
          acc[currentKey] = this.props.data[currentKey];
        }
        return acc;
      }, {});

      this.props.handleFilter(newList);
    } else {
      this.props.handleFilter(this.props.data);
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='search ...'
          id='search'
          onChange={this.handleSearch}
        />
      </div>
    );
  }
}

export default Search;
