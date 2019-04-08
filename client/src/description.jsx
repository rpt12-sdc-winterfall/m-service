import React from 'react';

const Description = (props) => {
  return(
    <div>
      <div className='summary'>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
        <p>{props.description}</p>
      </div>
      <div className='purchase'>
        <button type='button'>Kindle</button>
        <button type='button'>Amazon</button>
        <button type='button'>Stores</button>
        <button type='button'>Libraries</button>
      </div>
    </div>
  )
};

export default Description;