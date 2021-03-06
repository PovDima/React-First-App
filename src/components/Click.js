import React from 'react'
import PropTypes from 'prop-types';

export default class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count
    }
    this.incCount = this.incCount.bind(this);
    this.decCount = this.decCount.bind(this);
    this.resCount = this.resCount.bind(this);

  }
  incCount() {
    this.setState((value) => ({ count: value.count + 1 }));
  }
  decCount() {
    this.setState((value) => ({ count: value.count - 1 }));
  }
  resCount() {
    this.setState(() => ({ count: 0 }));
  }
  render() {
    return (
      <div className='container'>
        <div className='display'>
          {this.state.count}
        </div>
        <div className='buttons'>
          <button className='btn1 ' onClick={this.incCount}>
            +1
        </button>
          <button className='btn2' onClick={this.decCount}>
            -1
        </button>
          <button className='btn3' onClick={this.resCount}>
            0
        </button>
        </div>
      </div>
    )
  }
}