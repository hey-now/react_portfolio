import React from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { images } from '../../constants';

import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
   <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <a href='#home'>
        <img src={images.logo} alt="logo" />
      </a>
    </div>
    <div className='app__navbar-sites'>
      <a href='https://github.com/hey-now'>
        <img src={images.github} alt="github" />
      </a>
      <a href='https://www.linkedin.com/in/andrew-rubinstein/'>
        <img src={images.linkedin} alt="linkedin" />
      </a>
    </div>
    <ul className='app__navbar-links'>
      {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
        <li className='app__flex p-text' key={`link-${item}`}>
          <div />
          <a href={`#${item}`}>{item}</a>
        </li>
      ))}
    </ul>
    <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {
          toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
    </div>
   </nav>
  )
}

export default Navbar