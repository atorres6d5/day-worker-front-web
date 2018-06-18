import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'

class Home extends Component {
  constructor(){
    super()
    this.state={
      name:"LT. Dan Taylor",
      reviews:[],
      status:'Available',
      skills:['Tile', 'Yard', 'Bathroom'],
      zipcodes:['98034', '98033']
    }

  }


  render() {
    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Image avatar size={'small'} src="./img/profile_placeholder.jpg"/>
            <p>Name: {this.state.name}</p>
            <p>Reviews: {this.state.reviews.length}</p>
            <p>Review Avg: 4.5</p>
          </Grid.Column>
          <Grid.Column verticalAlign={"bottom"}>
            <p>Status: {this.state.status}</p>
            <p>Skills: {this.state.skills.join(", ")}</p>
            <p>Working zipcodes: {this.state.zipcodes.join(", ")}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default Home;
