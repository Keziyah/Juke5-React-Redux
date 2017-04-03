import React from 'react';
import { Link } from 'react-router';

export default function Stations (props) {

// const DUMMY_STATIONS_DATA = [
//   { name: '90s Hip Hop' },
//   { name: 'Death Metal' },
//   { name: 'Classical' }
// ];

const stations = props.stations
console.log("props", this.props)

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        Object.keys(stations).map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={'fill/this/in/later'}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}