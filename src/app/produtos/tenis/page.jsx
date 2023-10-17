import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Tenis() {
  return (
    <div className='tenis'>
        <h1>TÊNIS</h1>
        <h2>Air max plus - Purple Voltage </h2>
        <figure>
            <Image
            src="/img/tnn.jpg"
            alt="Imagem tenis"
            width={270}
            height={200}>
        </Image>
        <p><Link href="/" id="back"><button><span>Voltar</span></button></Link></p>
        </figure>
    </div>
  )
}
