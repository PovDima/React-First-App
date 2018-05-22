import React from 'react'
import PropTypes from 'prop-types';

class Click extends React.Component {
  constructor(props) {
    super();
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
    this.setState((value) => ({ count: 0 }));
  }
  render() {
    return (
      <div className='container'>
        <div className='display'>
          {this.state.count}
        </div>
        <div className='buttons'>
          <button className='btn1 btn' onClick={this.incCount}>
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
Click.defaultProps = {
  count: 0
};

Click.propTypes = {
  count: PropTypes.number
};
export default Click