"use client";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mensage: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Aquí se usa EmailJS directamente
        try {
        const result = await emailjs.send(
            'service_rk163ka',     // Tu Service ID
            'template_pcm3pre',     // Tu Template ID
            {
            name: formData.name,
            email: formData.email,
            message: formData.mensage
            },
            'rUxaEuhgFSJ1Mhr71'      // Tu Public Key
        );

        console.log(result.text);
        alert("Mensaje enviado 💌");
        } catch (error) {
        console.error(error);
        alert("Error al enviar el mensaje 😢");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center h-full mt-24">
            <h1 className='text-2xl font-bold mb-5 text-white '>Contactame</h1>
            <div className='mb-3 w-full'>
                <input 
                type="text"
                placeholder='Nombre'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow' 
            />
            </div>
            <div className='mb-3 w-full'>
                <input 
                type="email"
                placeholder='Email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow' 
            />
            </div>
            <div className='mb-3 w-full'>
                <input 
                placeholder='Tu mensaje'
                name='mensage'
                value={formData.mensage}
                onChange={handleChange}
                className='w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow' 
            />
            </div>
            <button 
                type='submit'
                className='px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400 rounded-3xl'>
                Enviar
            </button>
            </div>
        </form>
    );
};

export default ContactForm;