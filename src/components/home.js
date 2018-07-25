import React, { Component } from 'react';
import {
  Grid,
  Image,
  Card,
  Icon,
  Header,
  Label,
  Segment,
  Container
} from 'semantic-ui-react'
import Review from './review.js'



class Home extends Component {
  constructor(){
    super()
    this.state={
      name:"LT. Dan Taylor",
      reviews:[2,4,6,7],
      status:'Available',
      skills:['Tile ', 'Yard ' , 'Bathroom '],
      zipcodes:['98034', '98033'],
      blurb:"Exp in home flooring, tile hardwood lamanate you name i can do it. always willing to learn",
      projects:[{title:'fence', photo:"./img/profile_placeholder.jpg"}, {title:'basement', photo:"./img/profile_placeholder.jpg"}],
      about:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
      Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
      In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
      link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
      vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
      enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
      ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
      Curabitur ullamcorper ultricies nisi.`,
      contact:{phone:`(206)-867-5309`, email:"woodWorker@gmail.com"}
    }

  }


  render() {
    const extra = (
      <div>
        <a>
          {this.state.projects.length} Projects
        </a>
        <p>Phone: {this.state.contact.phone}<br/>Email: {this.state.contact.email}</p>
      </div>
    )

    return (
      <Grid>
        <Grid.Row>

        </Grid.Row>
        <Grid.Row columns={3} centered stretched>
          <Grid.Column>
            <Card
              image="./img/profile_placeholder.jpg"
              header={this.state.name}
              meta={this.state.skills}
              description={this.state.blurb}
              extra={extra}
              fluid

            />
            </Grid.Column>
            <Grid.Column>
              <Segment stretched>
                  <Header as="h1">Projects</Header>
                  <Header as="h3">Gallery</Header>
                  <Image.Group>
                    {this.state.projects.map(a=>(
                        <Image
                          centered
                          label={a.title}
                          size="tiny"
                          src={a.photo}
                        />
                    ))}
                  </Image.Group>

                  <p>Reviews: {this.state.reviews.length}</p>
                  <p>Review Avg: 4.5</p>
                  <p>Status: {this.state.status}</p>
                  <p>Skills: {this.state.skills.join(", ")}</p>
                  <p>Working zipcodes: {this.state.zipcodes.join(", ")}</p>
                </Segment>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment>
              <Header>About Me</Header>
              <Container>
                <p>{this.state.about}</p>
              </Container>
            </Segment>
            <Segment>
              <Header>Reviews</Header>
              <Review date="04/20/2014" user="theMoneyMan" review="lorim ipsum stuff" rating={5} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}

export default Home;
