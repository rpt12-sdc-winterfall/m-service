import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import DescriptionText from './descriptionText.jsx';

const Title = styled.h1`
  margin-bottom: 2px;
  width: 100%;
  font-weight: bold;
  font-family: "Merriweather", "Georgia", serif;
  color: #333333;
  font-size: 24px;
  line-height: 1.25;
  margin-top: 10px;
`

const Author = styled.div`
  color: #333;
  font-size: 16px;
  font-family: "Merriweather", "Georgia", serif;
  margin-bottom: 8px;
`
const RatingsRow = styled.div`
  display: flex;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 12px;
  margin-bottom: 10px;
`

const RatingsDot = styled.span`
  color: lightgrey;
`

const RatingsText = styled.span`
  color: #00635d;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const SummaryArea = styled.div`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`

// eslint-disable-next-line react/prefer-stateless-function
class Description extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weightedReviews: 0
    }

    this.numberWithCommas = this.numberWithCommas.bind(this);
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const totalRatings = this.numberWithCommas(this.props.ratings.five + this.props.ratings.four + this.props.ratings.three + this.props.ratings.two + this.props.ratings.one);
    const totalReviews = this.numberWithCommas(this.props.reviews + '');
    // console.log(this.props.reviews)

    return(
      <div>
        <SummaryArea>
          <Title>{this.props.title}</Title>
          <Author>by {this.props.author}</Author>
          <RatingsRow>
            <StarRatings
              rating={this.props.weightedReviews}
              starDimension="15px"
              starSpacing="0px"
              starRatedColor="rgb(250, 96, 74)"
            />
            <div>
              {this.props.weightedReviews.toFixed(2)}
              <RatingsDot> · </RatingsDot>
              <RatingsText>Rating details</RatingsText>
              <RatingsDot> · </RatingsDot>
              <RatingsText>{totalRatings} ratings</RatingsText>
              <RatingsDot> · </RatingsDot>
              <RatingsText>{totalReviews} reviews</RatingsText>
            </div>
          </RatingsRow>
          <DescriptionText text={this.props.description} />
        </SummaryArea>
        <div className='purchase'>
          <button type='button'>Kindle</button>
          <button type='button'>Amazon</button>
          <button type='button'>Stores</button>
          <button type='button'>Libraries</button>
        </div>
      </div>
    )
  }
};

export default Description;