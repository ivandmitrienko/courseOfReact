"use strict"

import React from 'react';

import DoubleButton from './DoubleButton.jsx';



function App() {
  // const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
  return (

    <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>


    // <RainbowFrame colors={colors}>
    //   Hello!
    // </RainbowFrame>
  ); 
}

export default App;

