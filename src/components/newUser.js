import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Icon, Image, Grid, Container, Form, Button } from 'semantic-ui-react'
import {emailChanged, passwordChangedNew, passConfirm, nameChange, userNameChange, zipChange, phoneChange} from '../actions'


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
          <Grid.Row style={{'marginTop': "2rem"}}>
            <Header as='h1' icon textAlign='center'>
              <Header.Content>Welcome To Day Worker</Header.Content>
            </Header>
          </Grid.Row>


            <Grid.Row >
              <Grid.Column >
                <Header as='h3' dividing style={{'marginTop':'0'}}>
                    Lets Get Started
                </Header>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row centered>
              <Grid.Column width='8'>
                <Form>
                  <Header>Login Info</Header>
                  <Form.Group grouped>
                    <Form.Input label='Name' placeholder='John Smith' value={this.props.name} onChange={(e)=>this.props.nameChange(e.target.value)} />
                    <Form.Input label='Username' placeholder='JonnyDoGood' value={this.props.username} onChange={(e)=>this.props.userNameChange(e.target.value)} />

                    <Form.Input
                      label='Password' placeholder='*******'
                      value={this.props.password}
                      onChange={(e)=>this.props.passwordChangedNew(e.target.value)} />

                    <Form.Input label='Password Confirm' value={this.props.passwordConfirm} placeholder='*******' onChange={(e)=>this.props.passConfirm(e.target.value)} />

                  </Form.Group>
                  <Header>Working Location</Header>
                  <Form.Group grouped>
                    <Form.Input label='Zipcode' placeholder="90210" value={this.props.zipcode} onChange={(e)=>this.props.zipChange(e.target.value)} />
                    {/* <Form.Select options={options} label='Mile Radius' /> */}
                  </Form.Group>
                  <Header>Contact Info</Header>
                  <Form.Group grouped>
                    <Form.Input label='Email' placeholder='doGooder@email.com' value={this.props.email} onChange={(e)=>this.props.emailChanged(e.target.value)} />
                    <Form.Input label='Phone #' placeholder='(555)-555-5555' value={this.props.phone} onChange={(e)=>this.props.phoneChange(e.target.value)}/>
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
  const { name, username, password, passwordConfirm, email, phone, zipcode } = props.newUser

  return { name, username, password, passwordConfirm, email, phone, zipcode }
}





export default withRouter(connect(mapStateToProps, {emailChanged, passwordChangedNew, passConfirm, nameChange, userNameChange, zipChange, phoneChange})(NewUser));
