import React, { Component } from 'react';
import '../styles.scss';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    imgFind: '',
  };

  imgRequestChange = event => {
    this.setState({ imgFind: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imgFind.trim() === '') {
      toast.error('Please, inpunt find request');
      return;
    }
    this.props.onSubmit(this.state.imgFind);
    this.setState({ imgFind: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.imgRequestChange} 
            value={this.state.imgFind}
          />
        </form>
      </header>
    );
  }
}
