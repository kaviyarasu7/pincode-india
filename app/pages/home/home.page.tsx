import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, ListView } from 'react-native';
import Styles from './home.styles';

class HomePage extends Component<any,any> {

	constructor(props: any) {
		super(props);
	}
	
	getResult(){
		this.props.navigator.replace({
			name: 'Result',
		});
	}
	render() {
    	return (
      		<View style={[Styles.container]}>  
			  	<Text onPress={this.getResult.bind(this)} style={{padding: 20}}>Go to Search</Text>
      		</View>
    	);
  	}
}

export default HomePage;