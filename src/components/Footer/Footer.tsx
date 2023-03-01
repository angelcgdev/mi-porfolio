import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='py-6 mb-4'>
      <h1 className="text-sm text-bold">
        Made With ❤ by{" "}
        <Link href="http://www.luiscarodev.com" className="underline underline-offset-1">
          LuisCaroDev
        </Link>
      </h1>
    </footer>
  );
}
