"use strict"

import React from 'react';

import ReactDOM from 'react-dom';

import IShop from './components/iShop';

let iShopName='Green';

let iShopArr=require('./iShopArr.json');

ReactDOM.render(
  <IShop
    iShopName={iShopName}
    iShopArr={iShopArr}
  />
  , document.getElementById('container') 
);