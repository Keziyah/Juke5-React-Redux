import React from 'react';
import FilterInput from '../components/FilterInput';
import Artists from '../components/Artists';
import { connect } from 'react-redux';
import {receiveArtists} from '../action-creators/artists'


class FilterableArtistsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  mapStateToProps = (state, props) => {
  return {
    artists: props.artists
  }
}

//  mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     handleChange: function() {
//       dispatch(receiveArtists())
//     }
//   }
// }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {

    const inputValue = this.state.inputValue;
    const filteredArtists = this.props.list.filter(artist => artist.name.match(inputValue));

    return (
      <div>
        <FilterInput
          handleChange={this.handleChange}
          inputValue={inputValue}
        />
        <Artists artists={filteredArtists}/>
      </div>
    );
  }
}

const FilterableArtistsContainer = connect(mapStateToProps, mapDispatchToProps)(FilterableArtistsContainer)
export default FilterableArtistsContainer;
