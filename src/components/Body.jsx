import React from 'react';
import '../assets/styles/components/Body.scss';

const Body = () => (
  <section className='body'>
    {
      new Array(126).fill(null).map((_, index) => (<div className='body-circle' key={index} />))
    }
    <div className='body-siren' />
  </section>
);

export default Body;
