import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className='py-6 bg-primary bg-opacity-10'>
      <h1 className="text-sm text-bold">
        Made With ❤ by{" "}
        <Link href="http://www.angeldev.com">
          <a className="underline underline-offset-1">AngelCGDev</a>
        </Link>
      </h1>
    </footer>
  )
}
