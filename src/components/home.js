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
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Reviews from './reviews.js'



class Home extends Component {
  constructor(){
    super()
    this.state={
      user:{
        name:"LT. Dan Taylor",
        reviews:[2,4,6,7],
        status:'Available',
        skills:['Tile ', 'Yard ' , 'Bathroom '],
        zipcodes:['98034', '98033'],
        blurb:"Exp in home flooring, tile hardwood lamanate you name i can do it. always willing to learn",
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
      },
      reviews:[
        {
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        },
        {
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        },
        {
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        },
        {
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        },{
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        },{
          date:'04/20/20',
          user:'sir-Mix-A-Lot',
          review:"blah blah blah said some shit", rating:3,
          title:"the time i got some stuff done and i didnt have to do it my self yayayay!!!"
        }
      ],
      projects:[{title:'fence', photo:"./img/profile_placeholder.jpg"}, {title:'basement', photo:"./img/profile_placeholder.jpg"}]
    }

  }


  render() {
    const extra = (
      <div>
        <a>
          {this.state.projects.length} Projects
        </a>
        <p>Phone: {this.state.user.contact.phone}<br/>Email: {this.state.user.contact.email}</p>
      </div>
    )

    return (
      <Grid>
        <Grid.Row>
          {/* header banner goes here */}
        </Grid.Row>

        <Grid.Row className="home-first-row" columns={12} centered stretched>
          <Grid.Column width={6}>
            <Card
              image="./img/profile_placeholder.jpg"
              header={this.state.name}
              meta={this.state.skills}
              description={this.state.blurb}
              extra={extra}

            />
            </Grid.Column>
            <Grid.Column width={6}>
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

                  <p>Reviews: {this.state.user.reviews.length}</p>
                  <p>Review Avg: 4.5</p>
                  <p>Status: {this.state.user.status}</p>
                  <p>Skills: {this.state.user.skills.join(", ")}</p>
                  <p>Working zipcodes: {this.state.user.zipcodes.join(", ")}</p>
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
              <Reviews reviews={this.state.reviews}/>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }

}


const mapStateToProps = (props) =>{
  const { user, projects, reviews } = props.home

  return { user, projects, reviews}
}

export default withRouter(connect(mapStateToProps, {})(Home));
