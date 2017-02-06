'use strict';
import React from 'react'
import {Navigator} from 'react-native'
import {HomePage, SplashPage, ResultPage} from './pages'


export default class MainNavigator extends React.Component<any,any> {

    render() {
        return (
        	<Navigator
                initialRoute={{ name: 'Splash' }}
                renderScene={ this.renderScene }
                configureScene={(route, routeStack) => Navigator.SceneConfigs.PushFromRight} />
        );
    }

    renderScene(route:any, navigator:any) { 

        switch (route.name) {
            case 'Splash': 
                return <SplashPage {...route.passProps} navigator = {navigator} route={route} />
            case 'Home':
                 return <HomePage {...route.passProps} navigator = {navigator} route={route} />     
            case 'Result':
                 return <ResultPage {...route.passProps} navigator = {navigator} route={route} />          
            default :
                return <HomePage {...route.passProps} navigator = {navigator} route={route} />
        }
        
    } 

}