import React from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';

import { AppWrap } from '../../wrapper';

import './Header.scss';

const Header = () => {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    }
  }
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 1 }}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className='p-text'>Hello, I am</p>
              <h1 className='head-text'>Andrew</h1>
            </div>
          </div>
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 2 }}
          >
            <div className='tag-cmp app__flex'>
              <p className='p-text'>Full Stack Software Engineer</p>
              <p className='p-text'>Web Developer</p>
              <p className='p-text'>Supply Chain Specialist</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, delayChildren: 2 }}
        className='app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className='overlay_circle'
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}  
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >  
        {['https://skillicons.dev/icons?i=mongodb', 'https://skillicons.dev/icons?i=express', 'https://skillicons.dev/icons?i=react', 'https://skillicons.dev/icons?i=nodejs'].map((circle, index) => (
          <div className='circle-cmp app__flex' key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home');