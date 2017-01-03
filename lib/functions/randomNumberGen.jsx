import React from 'react';

const randomNumberGen = (max, min) => Math.floor(Math.random() * (Number(max) - Number(min) + 1) + Number(min))

export default randomNumberGen
