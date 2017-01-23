import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Card, CardSection, Input, ButtonLoading } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {
  onEmailChange = text => {
    this.props.emailChanged(text);
  };
  
  // use arrow function to get access to (this.props).
  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };
  
  onButtonPress = () => {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  };
  
  onLoginError = () => {
    if (this.props.error) {
      return <Text style={styles.errorStyle}>{this.props.error}</Text>;
    }
  };
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>
        
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>
        
        <CardSection>
          <ButtonLoading onPress={this.onButtonPress} loading={this.props.loading}>
            Login
          </ButtonLoading>
        </CardSection>
        {this.onLoginError()}
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 15,
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
