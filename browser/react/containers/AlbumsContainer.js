import React, {Component} from 'react';
import store from '../store';
import {connect} from 'react-redux'
import Albums from '../components/Albums';

const mapStateToProps = function(state, ownProps) {
  console.log("ALBUMS", state.albums.list)
    return {albums: state.albums.list}
}

const AlbumsContainer = connect(mapStateToProps)(Albums)
export default AlbumsContainer
