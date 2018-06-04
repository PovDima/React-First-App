import React from 'react'
import PropTypes from 'prop-types'
const Text = props => (
    <div>
        <h2>{props.title}</h2>
        <h3>{props.text}</h3>
    </div>
);
export default Text