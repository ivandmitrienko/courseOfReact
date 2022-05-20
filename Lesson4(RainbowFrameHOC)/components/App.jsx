"use strict"

import React from 'react';

import DoubleButton from './DoubleButton.jsx';

function App() {
  
  const colors=['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];

  const FramedDoubleButton=withRainbowFrame(colors)(DoubleButton);

  
  return (

    <div>

      <DoubleButton caption1="однажды" caption2="пору" cbPressed={ num => alert(num) } >в студёную зимнюю</DoubleButton>

      <br/>
      
      <FramedDoubleButton caption1="я из лесу" caption2="мороз" cbPressed={ num => alert(num) }>вышел, был сильный</FramedDoubleButton>

    </div>

   

  ); 
}

export default App;

