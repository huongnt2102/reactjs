import React, { Component } from 'react';

export class SearchBar extends Component {
  render() {
    return (
      <div>
        <form>
          <input type='text' name='' id='' placeholder='Search ...' />
          <div>
            <input type='checkbox' name='' id='' />
            Only show products
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
