import React from 'react';

export default (props) =>{
    const frames = props.colors.reduce((acc,cur)=>
    <div style={{border:`2px solid ${cur}`, padding:'10px'}}>
        {cur}
    </div>,props.children);

    return <div>{frames}</div>;
}

