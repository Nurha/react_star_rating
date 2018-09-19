import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rating: 0
    };
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        <div className='center'>
          <h2>Rating from state: {rating}</h2>
          <StarRatingComponent 
            name="rate1" 
            starCount={5}
            value={rating}
            onStarClick={this.onStarClick.bind(this)}
            starColor={'#2E95C6'}
          />
        </div>
      </div>
    );
  }
}

export default App;
