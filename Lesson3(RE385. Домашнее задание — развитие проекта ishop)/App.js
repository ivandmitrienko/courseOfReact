"use strict"

import React from 'react';

import ReactDOM from 'react-dom';

import iShop from './components/iShop';

let iShopName='Green';

// let answersArr=require('./answers.json');

let iShopArr=[ 
  {id:0, title:'Пицца "ЦЫПЛЕНОК ТЕРИЯКИ"', price: 17.99, url:"https://www.green-market.by/files//catalogproducts/127-Picca_Cyplenok_teriyaki.jpg",count:111}, 
  {id:1, title:'Пицца "ЦЕЗАРЬ"', price: 18.20, url:"https://www.green-market.by/files/catalogproducts/128-Picca_Cezar'.jpg",count:222}, 
  {id:2, title:'Пицца "МОРСКАЯ"', price: 23.30, url:"https://www.green-market.by/files//catalogproducts/125-Picca_Morskaya.jpg",count:333} 
];
ReactDOM.render(
  React.createElement(iShop,{iShopName:iShopName,iShopArr:iShopArr}), 
  document.getElementById('container') 
);


