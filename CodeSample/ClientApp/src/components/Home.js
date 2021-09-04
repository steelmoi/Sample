import React, { Component } from 'react';
import { Search } from './Search';
import { ListItem } from './ListItem';

export class Home extends Component {
    static displayName = Home.name;
    static defaultProps = {
        Movies: []
    }

  render () {
    return (
      <div>
            <h1>Search Movies</h1>
            <Search></Search>
            <ListItem Movies={this.props.Movies}></ListItem>
      </div>
    );
  }
}
