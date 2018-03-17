import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#FFC107',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
    },
    textStyle: {
      fontSize: 25,
      color: '#4CAF50',
      textAlign: 'center'
    }
}
export default Header;