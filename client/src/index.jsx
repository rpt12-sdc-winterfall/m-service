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
    this.state.weightedReviews = 0;

    this.averageReviews = this.averageReviews.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3004/books/7')
      .then((response) => {
        return response.json();
      })
      .then((book) => {
        console.log(book.ratings)
        this.setState({
          book: book,
          weightedReviews: this.averageReviews(book.ratings)
        });
      });

  }

  averageReviews(total) {
    const totalReviewValue = (total.five * 5) + (total.four * 4) + (total.three * 3) + (total.two * 2) + (total.one * 1);
    const totalReviews = (total.five + total.four + total.three + total.two + total.one);
    return (totalReviewValue / totalReviews);
  }

  render() {
    return (
      <div style={flexStyle}>
        <Image image={this.state.book.image} />
        <Description
          title={this.state.book.title}
          description={this.state.book.description}
          author={this.state.book.author}
          ratings={{...this.state.book.ratings}}
          reviews={this.state.book.reviews}
          weightedReviews={this.state.weightedReviews}
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