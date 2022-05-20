import React from 'react';

export default colors => Component => (props)=>
    <div>

        {colors.reduce((acc,cur)=>
        <div style={{border:`2px solid ${cur}`, padding:'10px', textAlign:'center'}}>
            {acc}
        </div>,
        <Component {...props} />)}

    </div>
    
   


