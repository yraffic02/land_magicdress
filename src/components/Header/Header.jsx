import Image from "next/image"
import React from "react"

export const Header = () =>{
    return(
        <header className="flex flex-col items-center w-full p-3">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="border rounded-full flex items-center justify-center p-6 border-yellow-100">
              <Image src="/logo.png" height={90} width={90} alt="logo" priority />
            </div>
            <h1 className="text-yellow-400 font-semibold text-xl">
              Magic Dress - Aluguel de Vestidos
            </h1>
          </div>
        </header>
    )
}