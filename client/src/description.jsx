import React from 'react';

class Description extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div className='summary'>
          <h1>{this.props.title}</h1>
          <h2>{this.props.author}</h2>
          <p>{this.props.description}</p>
        </div>
        <div className='purchase'>
          <button>Kindle</button>
          <button>Amazon</button>
          <button>Stores</button>
          <button>Libraries</button>
        </div>
      </div>
    )
  }
}

export default Description;