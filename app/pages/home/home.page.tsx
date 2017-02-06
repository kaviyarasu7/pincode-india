import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, ListView } from 'react-native';
import Styles from './home.styles';

class HomePage extends Component<any,any> {

	constructor(props: any) {
		super(props);
	}

	// OnListMenuClicked(selectedMenu: string){

	// 	switch (selectedMenu) {
    //   		case 'CORPORATE ORIENTATION':
	// 			this.props.navigator.replace({
	// 				name: 'CoHome',
	// 			});
	// 			return;
	// 		case 'CO-Slide Zoom':
	// 			this.props.navigator.replace({
	// 				name: 'CoSlide',
	// 			});
	// 			return;
	// 		case 'CO-Video':
	// 			this.props.navigator.replace({
	// 				name: 'CoVideo',
	// 			});
	// 			return;
	// 	}
	// }
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