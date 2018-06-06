import React from 'react';
import PropTypes from 'prop-types';

const Controls = (props) => (
  <div >
    {
      props.status !== 'started' &&
      <button className="btn"
        disabled={!props.canStart}
        onClick={props.startTimer}>
        <div >
          Start
        </div>
      </button>
    }

    {
      props.status === 'started' &&
      <button className="btn"
        onClick={props.stopTimer}>
        <div >
          Stop
        </div>
      </button>
    }

    <button className="btn"
      onClick={props.resetTimer}>
      <div>
        Reset
      </div>
    </button>
  </div>

);

Controls.defaultProps = {
  startTimer: () => alert('startTimer'),
  stopTimer: () => alert('stopTimer'),
  resetTimer: () => alert('resetTimer'),
  status: null,
  canStart: false,
};

Controls.propTypes = {
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
  resetTimer: PropTypes.func,
  status: PropTypes.string,
  canStart: PropTypes.bool
};

export default Controls;