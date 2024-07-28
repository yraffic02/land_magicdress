'use client'
import { useEffect, useState } from "react";
import { Button } from "../Buttons/Button";

export default function Form({image}){
    const [tamanho, setTamanho] = useState('')
    const phoneNumber = '559886003440'; 
    const imageUrl = `${window.location.origin}/images/${image}.jpeg`; 
    const [message, setMessage] = useState('')
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleChange = (e) =>{
        const { value } = e.target;

        setTamanho(value)
    }

    useEffect(()=> {
        if(tamanho !== ''){
            setMessage(`Este vestido está disponível, no tamanho ${tamanho}. Veja a imagem: ${imageUrl}`)
        } else {
            setMessage(`Este vestido está disponível. Veja a imagem: ${imageUrl}`)
        }
    }, [message, tamanho])
    console.log(tamanho);
    return(
        <div 
            className="w-full flex flex-col items-center justify-center gap-2 p-2"
        >   
            <label 
                for="tamanho" 
                class="block text-sm font-bold leading-6 text-yellow-300"
            >
                Tamanho do vestido
            </label>
            <input 
                type="text" 
                name="tamanho" 
                id="tamanho" 
                className="
                    block 
                    w-2/5 
                    rounded-md 
                    border-0
                        p-2
                        text-gray-900 
                        ring-1 
                        ring-inset 
                        ring-gray-300 
                        placeholder:text-gray-400 
                        focus:ring-2 
                        focus:ring-inset 
                        focus:ring-indigo-600 
                        sm:text-sm 
                        sm:leading-6" 
                placeholder="tamanho ex: 38" 
                value={tamanho} 
                onChange={handleChange}    
            />
            <a href={url} target="_blank" rel="noopener noreferrer">
                <Button>
                    <p className="text-white">
                        Enviar
                    </p>
                </Button>
            </a>
        </div>
    )
}