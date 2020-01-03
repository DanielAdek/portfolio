import React from 'react';
import Particles from 'react-particles-js';
import config from '../assets/particlesjs-config';

export const Particle = ({ children }) => {
  return (
    <><Particles
      className="particleJs"
      params={config}
    />
    {children}</>
  )
}