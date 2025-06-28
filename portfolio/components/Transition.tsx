"use client";
import React from 'react';
import { motion } from 'framer-motion';

const TransitionVariants = { //animaciones de las capas de fondo
    initial: {
        y: "100%",
        height: "100%"
    },
    animate: {
        y: "0%",
        height: "0%",
    },
    exit: {
        y: ["0%", "100%"],
        height: ["0%", "100%"],
    },
}


const Transition: React.FC = () => { //transition entre las paginas
    return (
        <div>
            <motion.div //capa de fondo 1
                className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#de2e03]'
                variants={TransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{delay: 0.2, duration: 0.6, ease: "easeInOut"}}
            />
            <motion.div //capa de fondo 2
                className='fixed right-0 h-screen w-screen bottom-full z-[10] bg-[#fc4b08]'
                variants={TransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{delay: 0.4, duration: 0.6, ease: "easeInOut"}}
            />
            <motion.div //capa de fondo 3
                className='fixed right-0 h-screen w-screen bottom-full z-[20] bg-[#fc4b08]'
                variants={TransitionVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{delay: 0.6, duration: 0.6, ease: "easeInOut"}}
            />
        </div>
    );
};

export default Transition;