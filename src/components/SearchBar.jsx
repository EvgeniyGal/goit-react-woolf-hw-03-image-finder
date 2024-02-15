import { Component } from 'react';

export default class SearchBar extends Component {
  state = { query: '' };

  handlerSubmitForm = ev => {
    ev.preventDefault();
    const { onSubmit } = this.props;
    if (!this.state.query.trim()) {
      return;
    }
    onSubmit(this.state.query);
  };

  handlerInput = ev => {
    this.setState({ query: ev.target.value });
  };

  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handlerSubmitForm} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>
          <input
            className="SearchForm-input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handlerInput}
          />
        </form>
      </header>
    );
  }
}
