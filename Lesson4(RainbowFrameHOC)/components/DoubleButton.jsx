import React from 'react';

export default (props) =>{

    return (
        <div>
            <button onClick={()=>props.cbPressed(props.caption1)}>{props.caption1}</button>
            {props.children}
            <button onClick={()=>props.cbPressed(props.caption2)}>{props.caption2}</button>
        </div>
        
    )
}