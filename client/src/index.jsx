import React from 'react';
import ReactDOM from 'react-dom';

import Image from './image.jsx';
import Description from './description.jsx';

const flexStyle = {
  display: 'flex'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.book = {};
  }

  componentDidMount() {
    const setBook = this.updateState.bind(this);

    fetch('http://localhost:3004/books/7')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        setBook(myJson);
      });
  }

  updateState(book) {
    this.setState({
      book: book
    });
  }

  render() {
    return (
      <div style={flexStyle}>
        <Image image={this.state.book.image}/>
        <Description
          title={this.state.book.title}
          description={this.state.book.description}
          author={this.state.book.author}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  // eslint-disable-next-line no-undef
  document.getElementById('description-app')
);