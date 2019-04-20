import React from 'react';
import styled from 'styled-components';
import { Manager, Reference, Popper, Arrow } from 'react-popper';
import StarRatings from 'react-star-ratings';

const RatingsWindow = styled.div`
  width: 550px;
  padding: 10px;
  background-color: white;
  border: 4px solid #d7d1c4;
`

const RatingsTable = styled.table`
  width: auto;
`;

const RatingsBar = styled.div.attrs(({ length }) => ({
  width: length || "0%"
}))`
  display: block;
  background-color: #215625;
  width: ${props => props.width};
`;

const RatingsStar = styled.th`
  font-size: 12px;
`

const RatingsNumbers = styled.td`
  font-size: 12px;
  color: rgb(102, 102, 102);
`

const RatingsExit = styled.span`
  float: right;
  cursor: pointer;
`

const RatingsText = styled.span`
  color: #00635d;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

class RatingsPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return(
      <Manager>
        <Reference>
          {({ ref }) => (
            <RatingsText onClick={this.toggle} ref={ref}>
              Ratings details
            </RatingsText>
          )}
        </Reference>
        {this.state.isOpen && (
          <Popper placement="bottom">
            {({ ref, style, placement, arrowProps }) => (
              <div ref={ref} style={style} placement={placement}>
                <RatingsWindow>
                  Rating details
                  <RatingsExit onClick={this.toggle}>X</RatingsExit>
                  <RatingsTable border="0" cellSpacing="5" cellPadding="0">
                    <tbody>
                      <tr>
                        <RatingsStar width="25">
                          5&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing={0}
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length="100%">&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          66% (1380359)
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          4&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing={0}
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length="37%">&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          24% (513932)
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          3&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing={0}
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length="10%">&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          7% (148717)
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          2&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing={0}
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length="1%">&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          1% (23322)
                        </RatingsNumbers>
                      </tr>
                      <tr>
                        <RatingsStar width="25">
                          1&nbsp;
                          <StarRatings
                            numberOfStars={1}
                            starDimension='15px'
                            starSpacing={0}
                            starEmptyColor='rgb(250, 96, 74)'
                          />
                        </RatingsStar>
                        <td width="350">
                          <RatingsBar length="0%">&nbsp;</RatingsBar>
                        </td>
                        <RatingsNumbers width="90">
                          0% (8395)
                        </RatingsNumbers>
                      </tr>
                    </tbody>
                  </RatingsTable>
                  98% of people liked it
                  <div ref={arrowProps.ref} style={arrowProps.style} />
                </RatingsWindow>
              </div>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
 }

 export default RatingsPopup;