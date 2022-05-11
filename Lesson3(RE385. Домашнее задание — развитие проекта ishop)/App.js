"use strict"

import React from 'react';

import ReactDOM from 'react-dom';

import iShop from './components/iShop';

let iShopName='Green';

let iShopArr=require('./iShopArr.json');

ReactDOM.render(
  <iShop
    iShopName={iShopName}
    iShopArr={iShopArr}
  />
  , document.getElementById('container') 
);