import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <meta name="theme-color" content="rgb(var(--color-primary))" />
      </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  )
}