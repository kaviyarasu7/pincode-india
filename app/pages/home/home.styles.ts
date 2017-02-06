'use strict';
import React from 'react';
import {StyleSheet} from 'react-native';

let Styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#ffffff'
  },
  image: {
    width: 150,
    height: 80,
    marginRight: 10,
    marginTop: 10
  },
  welcome: {
    borderBottomColor: '#35648f',
    borderBottomWidth: 2,
    borderTopColor: '#35648f',
    borderTopWidth: 2,
    padding: 10,
    margin: 10,
    fontSize: 18,
    color: '#ec3237'
  },
  description: {
    margin: 10,
    fontSize: 16,
    lineHeight: 26,
    color: '#000',
  },
  list: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection:'row'
  },
  listTopic: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  footer: {
    position: 'absolute', 
    left: 0, 
    right: 0, 
    bottom: 0,
    flexDirection:'row'
  },
  footer_red: {
    flex: 0.5, height: 15, backgroundColor: '#ec3237'
  },
  footer_blue: {
    flex: 0.5, height: 15, backgroundColor: '#1e4679'
  }
});
 
export default Styles;