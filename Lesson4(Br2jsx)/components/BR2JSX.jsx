import React from 'react';

export default (props) =>{

    const withOutBr = props.text.split(/<br\s?\/?>/);

    return (<div className='br2jsx' style = {{width: "200px", backgroundColor:"tomato", textAlign:"center"}}>

       {withOutBr.map((e,i) => <React.Fragment key={i}>
           {e}
           {i<withOutBr.length-1 && <br/>}
           </React.Fragment>)}

         
        </div>);
}

