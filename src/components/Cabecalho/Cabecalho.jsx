import Link from 'next/link'
import React from 'react'

export default function Cabecalho() {
  return (
    <div className='cabecalho'>
      <header>
        <h2>Shoopli</h2>
        <nav>
        <p><Link href="/produtos/tenis">Tênis</Link></p>
        <p><Link href="/produtos/calca">Calça</Link></p>
        <p><Link href="/produtos/shorts">Shorts</Link></p>
        <p><Link href="/produtos/camisa">Camisa</Link></p>
        </nav>
      </header>
    </div>
  )
}
