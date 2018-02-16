import React, { Component } from 'react';
import Board from './board';
import Even from './even';

class Odd extends Component {
  render() {
    const num = parseInt(this.props.columns, 10)
    const odd = new Array(num).fill().map((val, idx) => {
        return (idx % 2 === 0 ? <div className="cell odd" key={idx}>3</div> : <div className="cell even" key={idx}>4</div>)
    })
    return (
      <div className="container">
        {odd}
      </div>
    );
  }
}

export default Odd;
