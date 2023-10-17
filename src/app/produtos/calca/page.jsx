import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Calca() {
  return (
    <div className='calca'>
        <h1>CALÇA</h1>
        <h2>Calça Piet X Oakley</h2>
        <figure>
            <Image
            src="/img/oack.webp"
            alt="Imagem calça"
            width={260}
            height={200}>
        </Image>
        <p><Link href="/" id="back"><button><span>Voltar</span></button></Link></p>
        </figure>
    </div>
  )
}
