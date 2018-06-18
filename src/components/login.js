import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, attemptLogin } from "../actions";
import { withRouter } from 'react-router-dom';


class Login extends Component {


  attemptLogin = ( e )=>{
    e.preventDefault()
    this.props.attemptLogin({email:this.props.email, password:this.props.password})

  }

  render() {
    console.log(this.props)

    return (
      <div className='login-form'>
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as='h2' color='teal' textAlign='center'>
          Log-in to your account
        </Header>
        <Form size='large' onSubmit={this.attemptLogin}>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={this.props.email} onChange={(e)=>this.props.emailChanged(e.target.value)}/>
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              value={this.props.password}
              onChange={(e)=>this.props.passwordChanged(e.target.value)}
            />

            <Button color='teal' fluid size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
    );
  }
}

const mapStateToProps = (props) => {
  const {login, email, password, error, loading } = props.login

  return {login, email, password, error, loading }
};

export default withRouter(connect(mapStateToProps, { emailChanged, passwordChanged, attemptLogin })(Login));
