import React from 'react';

export default (props) =>{

    // const withOutBr = props.text.split(/<br\s?\/?>/);

    const withOutBr = props.text.split(/<br\s?\/?>/).map((e,i)=>(i === 0) ? e : [<br key={i} />, e]);

    return (<div className='br2jsx' style = {{width: "200px", backgroundColor:"tomato", textAlign:"center"}}>

       {/* {withOutBr.map((e,i) => <React.Fragment key={i}>
           {e}
           {i<withOutBr.length-1 && <br/>}
           </React.Fragment>)} */}

           {withOutBr}

         
        </div>);
}

