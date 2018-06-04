import React from 'react'
import PropTypes from 'prop-types'
import Operation from './Operation'
export default class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            a: props.a,
            b: props.b,
            result: props.result,
            operation:props.operation
        }
        this.calc = this.calc.bind(this);
        this.changeA=this.changeA.bind(this);
        this.changeB=this.changeB.bind(this);
        this.opChange=this.opChange.bind(this);
    }
    opChange(e){
        this.setState({operation:e},() => this.calc())
    }
    calc() {
        this.setState(() => ({ result: this.state.a + this.state.b }))
        switch(this.state.operation){
            case '+':  this.setState(() => ({ result: this.state.a + this.state.b }));break;
            case '*':  this.setState(() => ({ result: this.state.a * this.state.b }));break;
            case '/':  this.setState(() => ({ result: this.state.a / this.state.b }));break;
            case '-':  this.setState(() => ({ result: this.state.a - this.state.b }))
        }
    }
    changeA(e){
        this.setState ({a:+e.target.value},()=>this.calc())
    }
    changeB(e){
        this.setState ({b:+e.target.value},()=>this.calc())
    }
    render (){
        return(
            <div className='calc'>
            <div >Result = {this.state.result}</div>
            <input onChange={this.changeA}  type='number'value={this.state.a} ></input>{this.state.operation}
            <input onChange={this.changeB}   type='number' value={this.state.b} ></input>
            <Operation opChange={this.opChange} opearation={this.state.operation} />
            </div>
        )   
    }
}
Calc.defaultProps = {
    a:6,
    b:5,
    operation : '+'
};
Calc.propTypes={
    a:PropTypes.number,
    b:PropTypes.number,
    result:PropTypes.number
}