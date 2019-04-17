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
        const date = new Date(book.publishDate);
        const month = date.toLocaleString('en-us', { month: 'long' });
        const day = date.toLocaleString('en-us', { day: 'numeric' });
        const year = date.toLocaleDateString('en-us', { year: 'numeric' });
        const publishDate = month + ' ' + day + 'th ' + year;
        console.log(month);
        this.setState({
          book: book,
          weightedReviews: this.averageReviews(book.ratings),
          publishDate: publishDate,
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
          links={{...this.state.book.links}}
          pages={this.state.book.pages}
          publishDate={this.state.publishDate}
          publisher={this.state.book.publisher}
          metadata={{...this.state.book.metadata}}
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