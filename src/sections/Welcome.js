/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import data from '../../yourData';
import { Socials } from '../components';
import { WebContext } from '../context/web-context';

export const Welcome = () => {
  
  const {mainRef} = useContext(WebContext);
  return (
    <section ref={mainRef} id='#main' className="pb-5 pt-24 flex flex-col gap-4">
      <div>
        <div className='relative'>
          <h1 className="text-4xl md:text-6xl text-bold w-4/5 inline">
              {data.headerTaglineOne}
          <span className="helloImg">
            <img className='inline h-8 md:h-14' src="https://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png" alt='helloImg' title="Hello"/>
          </span>
          </h1>
          <h1 className="text-4xl md:text-6xl text-bold w-4/5">
              {data.headerTaglineTwo}
          </h1>
        </div>
        <Socials className="mt-5" />
      </div>
    </section>
  )
}
