import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Shorts() {
  return (
    <div className='shorts'>
        <h1>Shorts</h1>
        <h2>Shorts Corteiz</h2>
        <figure>
            <Image
            src="/img/shorts.jpg"
            alt="Imagem shorts"
            width={250}
            height={200}>
            </Image>
            <p><Link href="/" id="back"><button><span>Voltar</span></button></Link></p>
        </figure>
    </div>
  )
}
