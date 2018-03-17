import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>{props.footerText}</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#1cad61',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      position: 'relative',
    },
    textStyle: {
      fontSize: 25,
      color: '#fff',
      textAlign: 'center'
    }
}
export default Footer;