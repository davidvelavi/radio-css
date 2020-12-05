import React from 'react';
import '../assets/styles/components/Header.scss';

const Header = () => (
  <section className='header'>
    <section className='header-screen'>
      <div className='header-rule' />
      {
        new Array(11).fill(null).map((_, index) => {
          const active = index === 2 ? 'tuner' : '';
          return (
            <div
              className={`header-rule-line ${active}`}
              key={index}
            />
          );
        })
      }
    </section>
    <section className='header-tone'>
      <div className='header-botton' />
      <div className='header-botton small' />
    </section>

  </section>
);

export default Header;
