import React from 'react'

export default function Produto({params}) {
  return (
    <div>
        <p>Valor de Id recebido: {params.slug}</p>
    </div>
  )
}
