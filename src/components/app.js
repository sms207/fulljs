import React from 'react'

import PropTypes from 'prop-types';

const App = (props) => {
    return (
        <h2 className="text-center">
            {props.msg}
        </h2>
    );
};

App.propTypes = {
    msg: PropTypes.string
};

App.defaultProps = {
    msg: "Hello default props!"
};

export default App;