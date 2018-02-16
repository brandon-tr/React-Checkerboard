import React, { Component } from 'react';

class Board extends Component {
    board = [];
    render() {
        const num = parseInt(this.props.columns, 10)
        this.board = new Array(num).fill().map((val, idx) => {
            return (idx % 2 === 0 ? <div className="cell even" key={idx}></div> : <div className="cell odd" key={idx}></div>)
        })

    return (
        <div id="parent">
            <div>{this.board}</div>
        </div>
    );
  }
}

export default Board;
