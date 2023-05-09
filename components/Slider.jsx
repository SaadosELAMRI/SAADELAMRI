import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='gallery' className='max-w-[1240px] mx-auto'>
      <h1 className='text-2xl font-bold text-center p-4'>My Projects</h1>
      <p>1- The initial project entails an Android application that displays a comprehensive list of the US states. At random intervals, the app selects a state capital, and your objective is to correctly identify the state for which that city serves as the capital. You can also navigate to the Wikipedia page of that state by clicking of the icon in the top right.</p>
      <p>2- The second project is this Portfolio, made using Next.js</p>
      <p>3- The third project involves the development of an iOS app utilizing SwiftUI. This particular application displays an extensive index of airports located across the globe. Once you have selected an airport of your choosing, the app will provide you with directions to that specific airport via Apple Maps.</p>

      <div className='relative flex justify-center p-4'>

      {slides.map((slide, index) => {
  return (
    <div
      key={index}
      className={
        index === current
          ? 'opacity-[1] ease-in duration-1000'
          : 'opacity-0'
      }
    >
      <FaArrowCircleLeft
        onClick={prevSlide}
        className='absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2]'
        size={50}
      />
      {index === current && (
        <Image
          src={slide.image}
          alt='/'
          width='1440'
          height='600'
          objectFit='contain'
        />
      )}
      <FaArrowCircleRight
        onClick={nextSlide}
        className='absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]'
        size={50}
      />
    </div>
  );
})}

    </div>
    </div>
  );
};

export default Slider;
