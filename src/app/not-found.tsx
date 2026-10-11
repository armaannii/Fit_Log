import Link from 'next/link';
import React from 'react';

const notFound = () => {
    return (
        <div className='container mx-auto text-center py-40 text-[#8A92A0] space-y-3'>
            <h2> <b className='text-white'>404!</b> Not Found</h2>
            <p className='mb-7'>Could not find requested resource</p>
            <Link href="/" className='bg-[#9cff00] text-black px-5 py-2 rounded-xl font-medium'>Return Home</Link>
        </div>
    );
};

export default notFound;