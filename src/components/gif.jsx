import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    console.log(this.props.id);
    console.log(this.props.selectGif);
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media0.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
        <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
