import React from 'react'
import PropTypes from 'prop-types'
export default class Operation extends React.Component {
    constructor(props) {
        super(props);        
        this.change=this.change.bind(this);
    }
    change(e){
        this.props.opChange(e.target.value);
    }
    render() {
        return (
            <div className='change'>
                <button onClick={this.change} value='+'>+</button>
                <button onClick={this.change} value='-'>-</button>
                <button onClick={this.change} value='*'>*</button>
                <button onClick={this.change} value='/'>/</button>
            </div>
        )
    }
} 