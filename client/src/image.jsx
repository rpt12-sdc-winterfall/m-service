import React from 'react';

const imgStyle = {
  height: '200px',
  width: '125px'
}

const Image = (props) => {
  return(
    <div>
      <img src={props.image} style={imgStyle} alt='book cover' />
      <p><button type='button'>Want to Read</button></p>
      <p>Rate this book</p>
      <p>Preview</p>
    </div>
  );
}

export default Image;