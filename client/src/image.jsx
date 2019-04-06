import React from 'react';

const imgStyle = {
  height: '200px',
  width: '125px'
}

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <img src={this.props.image} style={imgStyle}></img>
        <p><button>Want to Read</button></p>
        <p>Rate this book</p>
        <p>Preview</p>
      </div>
    );
  }
}

export default Image;