import React from 'react';
export default (props) => {
    return (<div>
        {props.children}
        <div style={{clear: "both"}}/>
    </div>);
}