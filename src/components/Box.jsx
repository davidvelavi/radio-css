import React from 'react';
import '../assets/styles/components/Box.scss';

const Box = ({ children }) => {
  return (
    <section className='box'>
      {children}
    </section>
  );
};

export default Box;
