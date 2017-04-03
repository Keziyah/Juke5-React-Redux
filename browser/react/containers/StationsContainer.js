import React, { Component } from 'react';
import { connect } from 'react-redux';
import Stations from '../components/Stations';


const mapStateToProps = (state) => {
    return {
        stations: convertSongsToStations(state.songs)
    }
}

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  console.log(stations)
  return stations;
};

const mapDispatchToProps = (dispatch) => {
    return {}
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)
export default StationsContainer 