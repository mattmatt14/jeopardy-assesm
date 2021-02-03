import React from 'react';

function Welcome(props) {





    let name = props.match.params.name || props.name;
    return (
        <div classname="Welcome">
            Welcome, {name}!
        </div>
    );
}

export default Welcome;