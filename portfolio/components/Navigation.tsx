"use client";
import { NavLinks } from '@/constants';
import { div } from 'framer-motion/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useRef, useEffect, useState } from 'react';
import { text } from 'stream/consumers';
import Transition from './Transition';

const Navigation: React.FC = () => {//componente de navegacion
    const [isRouting, setisRouting] = useState(false)
    const path = usePathname()
    const [prevPath, setPrevPath] = useState("/")
    const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Ref para almacenar el timeout

    useEffect(() => {//compara la ruta actual con la anterior y si son diferentes activa el estado de isRouting
        if (path !== prevPath) {
            setisRouting(true)
        }
    }, [path, prevPath])

    useEffect(() => {//si isRouting es verdadero, activa el timeout y cambia el estado de isRouting a falso
        if (isRouting) {
            setPrevPath(path);
            setTimeout(() => {
                setisRouting(false)
            }, 1200)
            return () => {
                if (timeoutRef.current) {
                    
                }
            }
        }
    }, [isRouting])
    
    return (
        <div 
        style={{left: "20%"}}
        className='absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] rounded-full flex justify-between items-center border bg-black border-white px-4 py-7'
        >{/** contenedor de la barra de navegacion */}
            {isRouting && <Transition />}{/** animacion de transicion */}
            {NavLinks.map((nav) => (
                <Link
                    key={nav.name}
                    href={nav.link}
                    className='mb-16 pl-4 min-w-[20%]'
                    >
                    <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800": "text-white"}`} />
                </Link>
            ))}{/** iconos de la barra de navegacion */}
        </div>
    );
};

export default Navigation;