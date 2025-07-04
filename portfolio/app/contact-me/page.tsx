import ContactForm from '@/components/ContactForm';
import React from 'react';

const Page = () => {
    return (
        <div 
        style={{backgroundImage: `url('/bg-2.png')`}}
        className='w-screen h-screen bg-cover bg-center flex items-center justify-center'>
            <div 
            style={{backgroundImage: `url(LogoBaner.jpg)`}}
            className='h-[60%] w-[80%] relative bg-cover bg-center rounded-xl border border-white'>
                <div
                className='absolute left-20 bottoml-16 w-[70%] md:w-[30%]'>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default Page;