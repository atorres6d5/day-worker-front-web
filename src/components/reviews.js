import React, { Component } from 'react';
import { Grid, Item } from 'semantic-ui-react'
import Review from './common/review.js'

class Reviews extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }




  render() {
    return (
      <Grid  devided padded>
        <Grid.Row style={{'padding':'0'}} columns={8}>
          {this.props.reviews.map(review=>{
            return(
              <Item.Group >
                <Grid.Column width={3} stretched centered textAlign="left">
                  <Review
                    style={{'padding':'0'}}
                     date={review.date}
                     user={review.user}
                     review={review.review}
                     rating={review.rating}
                     title={review.title}
                  />
                </Grid.Column>
              </Item.Group>
            )
          })}
        </Grid.Row>
      </Grid>
    );
  }

}

export default Reviews;
