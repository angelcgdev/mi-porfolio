import React from 'react'
import data from '../../../yourData'
import Socials from '../../components/Socials'

export const HomeSection = () => {
  return (
    <div className="mt-20">
        <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-bold w-4/5">
            {data.headerTaglineOne} <br />
            {data.headerTaglineTwo}
        </h1>
        <Socials className="mt-5" />
    </div>
  )
}
