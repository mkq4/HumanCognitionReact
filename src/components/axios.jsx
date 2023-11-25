import React from 'react'

import axios from 'axios';
const API = import.meta.env.VITE_AXIOS;

const axiosPatch = ( params ) => {
  axios.put(`${API}/${params.id}`, {
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