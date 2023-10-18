import Image from 'next/image'
import Link from 'next/link'


export default function Home({ children }) {
  return (
    <div className=''>
      <header>
        <div className="img_routes">

          <div className='container-itens'>
            <Link href="/produtos/tenis">
              <Image
                src="/img/tnn.jpg"
                alt='tenis'
                width={300}
                height={220}
              />
            </Link>

            <Link href="/produtos/calca">
              <Image
                src="/img/oack.webp"
                alt='tenis'
                width={300}
                height={220}
              />
            </Link>
          </div>

          <div className='container-itens'>
            <Link href="/produtos/shorts">
              <Image
                src="/img/shorts.jpg"
                alt='tenis'
                width={300}
                height={220}
              />
            </Link>

            <Link href="/produtos/camisa">
              <Image
                src="/img/class.webp"
                alt='tenis'
                width={300}
                height={220}
              />
            </Link>
          </div>


        </div>


        <nav>
          <p><Link href="/produtos/tenis"></Link></p>
          <p><Link href="/produtos/calca"></Link></p>
          <p><Link href="/produtos/shorts"></Link></p>
          <p><Link href="/produtos/camisa"></Link></p>
        </nav>
      </header>
    </div>
  )
}

