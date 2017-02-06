import React, { Component } from 'react';
import { View, Navigator, Image, StyleSheet } from 'react-native';
import Styles from './splash.styles';

class SplashPage extends Component<any,any> {

	componentWillMount () {
        setTimeout (() => {
           this.props.navigator.replace({
				name: 'Home',
			});
        }, 2000);
	}

	render() {
    	return (
      		<View style={[Styles.container]}>  
			  	<Image source={require('../../images/kotak_logo.jpg')}/>
      		</View>
    	);
  	}
}

export default SplashPage;