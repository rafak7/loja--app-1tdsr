import Link from 'next/link'
import React from 'react'

export default function Home({children}) {
  return (
    <div>
      <header>
        <nav>
          <p><Link href="/produtos/tenis"></Link></p>
          <p><Link href="/produtos/calca"></Link></p>
          <h2 id='loja'>Loja</h2>
          <p><Link href="/produtos/shorts"></Link></p>
          <p><Link href="/produtos/camisa"></Link></p>
        </nav>
      </header>
    </div>   
  )
}

