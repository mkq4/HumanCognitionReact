import React from 'react'

import axios from 'axios';
const API = 'https://652d87fdf9afa8ef4b2794b0.mockapi.io/profile';

const axiosPatch = ( params ) => {
  axios.put(`https://652d87fdf9afa8ef4b2794b0.mockapi.io/profile/${params.id}`, {
    bestResult: params.bestResult
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
}

export default axiosPatch