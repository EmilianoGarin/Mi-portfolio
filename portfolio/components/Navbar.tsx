import { div } from 'framer-motion/client';
import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';

const Navbar: React.FC = () => { //navbar de la pagina, contiene el logo y los iconos de las redes sociales
    return (
        <div className="fixed  top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row items-center gap-3">
                <div className='relative'>
                    <div className="absolute inset-0 w-[50px] h-[50px] bg-white rounded-full -z-10 translate-x-[40px] translate-y-[43px]"></div> {/* Círculo blanco detrás del logo */}
                    <Image
                        src="/logoEG.png" //logo de la pagina
                        alt="logo"
                        width={100}
                        height={100}
                        className="w-full h-full object-contain rounded-full"
                    />
                </div>
                <h1 className='text-white text-[25px] font-semibold'>
                    Emiliano
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                            {" "}
                            Garin
                            {" "}
                        </span>
                </h1>
            </div>
            
            <div className='flex flex-row gap-5 mb-2'>{/** contenedor de los iconos de las redes sociales */}
                {Socials.map((social) => (
                    <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer">
                        <Image
                            src={social.src}
                            alt={social.name}
                            width={28}
                            height={28}
                        />
                    </a>
                ))} 

            </div>
        </div>
    );
};

export default Navbar;