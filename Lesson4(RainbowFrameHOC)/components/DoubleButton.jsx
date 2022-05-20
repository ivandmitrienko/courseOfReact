import React from 'react';

export default (props) =>{

    return (
        <div>
            <button onClick={()=>props.cbPressed(props.caption1)}>{props.caption1}</button>
            {props.children}
            <button onClick={()=>props.cbPressed(props.caption2)}>{props.caption2}</button>
        </div>
    )

   


    // const frames = props.colors.reduce((acc,cur)=>
    // <div style={{border:`2px solid ${cur}`, padding:'10px', textAlign:'center'}}>
    //     {acc}
    // </div>,
    // props.children);

    // return <div>{frames}</div>;
}