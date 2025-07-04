"use client";
import React from 'react';
import { Swiper, SwiperSlide	} from 'swiper/react';
import 'swiper/css';
import { SkillData } from '@/constants';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const Page = () => {
    return (
        <div 
        style={{backgroundImage: `url('/bg-2.png')`}}
        className='h-screen w-screen justify-center flex items-center bg-cover bg-center'>
            <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='fount-semibold text-white text-[50px]'>
                        Habilidades
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
                                {" "}
                                y
                                {" "}
                            </span>
                        Tecnologias
                    </h1>
                    <p className='text-gray-400 text-[20px]'>Estas son algunas de las habilidades y tecnologias que manejo</p>
                </div>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className='max-w-[80%]'
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={skill.Image}
                                alt={skill.name}
                                width={skill.width}
                                height={skill.height}
                            />
                        </SwiperSlide> 
                    ))}
                </Swiper>
                <Swiper
                    slidesPerView={5}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: true
                    }}
                    speed={5000}
                    modules={[Autoplay]}
                    className='max-w-[80%]'
                >
                    {SkillData.map((skill, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={skill.Image}
                                alt={skill.name}
                                width={skill.width}
                                height={skill.height}
                            />
                        </SwiperSlide> 
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Page;