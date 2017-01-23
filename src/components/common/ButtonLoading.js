import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Spinner } from './';

const ButtonLoading = ({ onPress, children, loading }) => {
  const { buttonStyle, textStyle } = styles;
  
  const isLoading = () => {
    if (loading) {
      return <Spinner size="small" />;
    }
    
    return (
      <Text style={textStyle}>
        {children}
      </Text>
    );
  };
  
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      {isLoading()}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    height: 45,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
}

export { ButtonLoading };
