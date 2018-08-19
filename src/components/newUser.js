import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Icon, Image, Grid, Container, Form, Button } from 'semantic-ui-react'


class NewUser extends Component {

  render() {
    const options = [
  { key: '5', text: '5 Miles', value: 5 },
  { key: '10' , text: '10 Miles', value: 10 },
  { key: '15', text: '15 Miles', value: 15},
  { key: '20', text: '20 Miles', value: 20}
]

    return (
      <Container>
        <Grid>
          <Grid.Row style={{'margin-top': "2rem"}}>
            <Header as='h1' icon textAlign='center'>
              <Header.Content>Welcome To Day Worker</Header.Content>
            </Header>
          </Grid.Row>


            <Grid.Row >
              <Grid.Column >
                <Header as='h3' dividing style={{'margin-top':'0'}}>
                    Lets Get Started
                </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width='8'>
                <Form>
                  <Header>Login Info</Header>
                  <Form.Group grouped>
                    <Form.Input label='Name' placeholder='John Smith' />
                    <Form.Input label='Username' placeholder='JonnyDoGood' />
                    <Form.Input label='Password' placeholder='*******' />
                    <Form.Input label='Password Confirm' placeholder='*******' />
                  </Form.Group>
                  <Header>Working Location</Header>
                  <Form.Group grouped>
                    <Form.Input label='Zipcode' placeholder="90210" />
                    <Form.Select options={options} label='Mile Radius' />
                  </Form.Group>
                  <Header>Contact Info</Header>
                  <Form.Group grouped>
                    <Form.Input label='Email' placeholder='doGooder@email.com' />
                    <Form.Input label='Phone #' placeholder='(555)-555-5555' />
                  </Form.Group>
                  <Button floated="right" color='green' content='Create New Account' />
                </Form>
              </Grid.Column>

          </Grid.Row>
        </Grid>
      </Container>

    );
  }

}


const mapStateToProps = (props) => {
  const { userType, location, name, email } = props.newUser

  return { userType, location, name, email }
}





export default withRouter(connect(mapStateToProps, {})(NewUser));
