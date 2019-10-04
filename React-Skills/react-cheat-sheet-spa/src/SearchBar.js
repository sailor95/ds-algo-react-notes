// This is a temp file!
import React from 'react';

class SearchBar extends React.Component {
  state = {
    term: ''
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
            <button type="submit">Go!</button>
          </div>
        </form>
      </div>
    );
  }
};

export default SearchBar;