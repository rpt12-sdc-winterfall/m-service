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

const Description = (props) => {
  return(
    <div>
      <div>
        <Title>{props.title}</Title>
        <Author>by {props.author}</Author>
        <RatingsRow>
          <StarRatings
            rating={4}
            starDimension="15px"
            starSpacing="0px"
            starRatedColor="rgb(250, 96, 74)"
          />
          <div>
            4
            <RatingsDot> · </RatingsDot>
            <RatingsText>Rating details</RatingsText>
            <RatingsDot> · </RatingsDot>
            <RatingsText>2,073,822 ratings</RatingsText>
            <RatingsDot> · </RatingsDot>
            <RatingsText>33,328 reviews</RatingsText>
          </div>
        </RatingsRow>
        <DescriptionText text={props.description} />
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