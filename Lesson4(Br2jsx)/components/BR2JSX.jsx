import React from 'react';

export default (props) =>{

    const regex = /<br\s?\/?>/;

    const withOutBr = props.text.split(regex);

    const withBr = withOutBr.map((e) => e +"<br>")

    return <div>{withBr}</div>;
}

