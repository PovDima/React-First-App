import React from 'react'
import Text from './Text'
import Click from './Click'
import Calc from './Calc'
import Clock from './Clock'
import Timer from './Timer/Timer'
export default class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove}>
        <Text text='Mouse Tracker' />
        Current position  x:{this.state.x}  y:{this.state.y}
        <Clock/>
        <Text text='Clicker' />
        <Click count={0} />
        <Text text='Calculator' title='' />
        <Calc operation={'+'} />
        <Timer/>
      </div>
    );
  }
}