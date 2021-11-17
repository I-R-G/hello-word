import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
    const cssClasses = ['backdrop', props.show ? 'backdropOpen' : 'backdropClosed'];

    return <div className={cssClasses.join(' ')}></div>;
};

export default Backdrop;