import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
      <nav className='fixed top-0 left-0 right-0 bg-background/800 backdrop-blur-xl z-20 border-b'>
        <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
            {/* Logo */}
            <Link href={"/"} className="flex items-center">
            <Image src='/logo.png'
            alt='Lumia logo'
            width={400}
            height={400}
            className='w-full h-11'
            priority
            />
            {/* <h3 className='text-lg '> Lumia </h3> */}
            </Link>

            {/* Search and Location - Desktop only */}

            {/* Right Side Actions */}
        </div>
        {/* Mobile Search and Location - Below Header */}
      </nav>

      {/* Modals */}
    </>
  )
};

export default Header;
