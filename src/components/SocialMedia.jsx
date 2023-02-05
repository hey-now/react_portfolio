import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=Check%20Out%20this%20Awesome%20Developer%20Andrew%20Rubinstein!%20https://andrew-rubinstein.netlify.app/" target={'blank'}>
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com" target={'blank'}>
          <BsInstagram />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com" target={'blank'}>
          <FaFacebookF />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia