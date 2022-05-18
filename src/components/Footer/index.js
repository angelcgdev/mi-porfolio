import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <h1 className="text-sm text-bold mt-10">
      Made With ❤ by{" "}
      <Link href="http://www.angeldev.com">
        <a className="underline underline-offset-1">AngelCGDev</a>
      </Link>
    </h1>
  )
}
