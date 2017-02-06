import React, { Component } from 'react';
import { View, Navigator, Image, StyleSheet, Text } from 'react-native';
import Styles from './result.styles';

class ResultPage extends Component<any,any> {

	constructor(props: any) {
		super(props);
	}
		
	render() {
    	return (
      		<View style={[Styles.container]}>  
			  	<Text>Result page</Text>
      		</View>
    	);
  	}
}

export default ResultPage;