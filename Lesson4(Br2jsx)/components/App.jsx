"use strict"

import React from 'react';

import BR2JSX from './BR2JSX.jsx';

function App() {

  const text="первый<br>второй<br/>третий<br />последний";

  return <BR2JSX text={text}/>;
}

export default App;

