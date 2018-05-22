import React from 'react'
import PropTypes from 'prop-types'
const Text = props => (
    <div>
        <h1>{props.title}</h1>
        <h3>{props.text}</h3>
    </div>
);
Text.defaultProps = {
    title: 'Welcome to My First React App',
    text: 'Clicker'
}
export default Text