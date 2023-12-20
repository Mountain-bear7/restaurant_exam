import React from 'react';
import {heroData} from '../data';
import Header from './Header';
import { motion } from 'framer-motion';
import {fadeIn, staggerontainer} from '../variants'
const Hero = () => {
  const {pretitle, title, subtitle, btnText} = heroData
  return (
    <section className='min-h-[980px] bg-hero bg-cover bg-right'>
      <div className='container mx-auto'>
        hero
      </div>
    </section>
  );
};

export default Hero;
