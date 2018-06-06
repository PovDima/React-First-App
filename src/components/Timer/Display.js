import React from 'react';
import PropTypes from 'prop-types';
import Time from './Time';
import Text from '../Text'

const Display = (props) => {

  const time = new Time();

  const onChange = (e) => {
    props.onSecondsChanged(e.target.value);
  };


  return (
    <div className="display">
      <Text text='Timer' />
      {
        props.status === 'started'
        && <div  >
          {time.getTime(props.time)}
        </div>
      }
      {
        props.status !== 'started' &&
        <div >
          <div >
            {time.getTime(props.time)}
          </div>
          <input
            maxLength="6" value={props.seconds}
            onChange={onChange} />
        </div>
      }
      <div>
        {props.children}
      </div>
    </div>
  );
};

Display.defaultProps = {
  seconds: 0,
  status: null,
  time: 0,
  onSecondsChanged: (e) => console.log(e.target.value)
};

Display.propTypes = {
  children: PropTypes.element,
  seconds: PropTypes.number.isRequired,
  status: PropTypes.string,
  time: PropTypes.number,
  onSecondsChanged: PropTypes.func
};
export default Display