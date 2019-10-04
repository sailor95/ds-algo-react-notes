// This is a temp file!
import React from 'react';

import SearchBar from './SearchBar';

class ControlledForm extends React.Component {
  onSearchSubmit = term => {
    console.log(term);
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default ControlledForm;