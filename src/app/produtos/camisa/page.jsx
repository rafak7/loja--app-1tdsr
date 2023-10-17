import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Camisa() {
  return (
    <div className='camisa'>
        <h1>CAMISA</h1>
        <h2>CAMISETA CLASS</h2>
        <figure>
            <Image
            src="/img/class.webp"
            alt="Imagem camisa"
            width={280}
            height={220}>
            </Image>
            <p><Link href="/" id="back"><button><span>Voltar</span></button></Link></p>
        </figure>
    </div>
  )
}
