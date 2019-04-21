import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchForm from './search.jsx'
import Gif from './gif.jsx'
import GifList from './gif-list.jsx'

const GIPHY_API_KEY = 'QPrQn9nl5hFiJ3pv39JxHUpbEnySJswz';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "jUwpNzg9IcyrK"
    }
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
        this.setState({
          gifs: result.data
        });
      });
  }

    selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
        <div>
          <div className="left-scene">
            <SearchForm search={this.search} />
            <div className="selected-gif">
              <Gif id={this.state.selectedGifId} />
            </div>
          </div>
          <div className="right-scene">
            <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
          </div>
        </div>
      );
  }
}

export default App;
