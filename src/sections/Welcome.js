/* eslint-disable @next/next/no-img-element */
import React from 'react'
import data from '../../yourData'
import Socials from '../components/Socials'

export const Welcome = () => {
  return (
    <div className="mt-20">
      <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-bold w-4/5" style={{display: 'inline'}}>
          {data.headerTaglineOne}
      <span className="helloImg">
        <img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Waving_Hand_Sign_Emoji_Icon_ios10_grande.png" alt='helloImg' title="Hello"/>
      </span>
      </h1>
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-bold w-4/5">
          {data.headerTaglineTwo}
      </h1>
        <Socials className="mt-5" />
    </div>
  )
}
