import { useRouter } from 'next/router';
import React from 'react'
import Button from '../components/Button'

export default function FourOhFour() {
    const router = useRouter();
    const handleClick =()=>{
        router.push('/');
    }

  return (
    <div className='h-screen flex  justify-center flex-col items-center'>
        <h1>404 - Page Not Found</h1>
        <Button onClick={handleClick}>
            Go back home
        </Button>
    </div>
  )
}
