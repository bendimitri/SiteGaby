import { asset } from './assets'

export type Product = {
  id: string
  name: string
  blurb: string
  price?: string
  image: string
  href: string
}

export const profile = {
  name: 'https.user.gaby',
  handle: '@https.user.gaby',
  title: 'links da live',
  bio: 'Produtos que eu uso em live!\nOs links estão todos aqui. 💜',
  avatar: asset('avatar-gaby.jpg'),
}

/** Links da Shopee. Preço: só o número (opcional). */
export const products: Product[] = [
  {
    id: 'paleta',
    name: 'Paleta Athena UCANBE',
    blurb: 'Paleta de pintura facial com 20 cores.',
    image: asset('produto-paleta.png'),
    href: 'https://s.shopee.com.br/6q0oiA3BBb',
  },
  {
    id: 'cilios',
    name: 'Cílios postiços manga',
    blurb: 'Kit com 5 pares, estilo spiky.',
    image: asset('produto-cilios.png'),
    href: 'https://s.shopee.com.br/9V1Zt7MotZ',
  },
  {
    id: 'lentes',
    name: 'Lentes Black Plus',
    blurb: 'Lente de contato 16.0 mm · 6 meses.',
    image: asset('produto-lentes.png'),
    href: 'https://s.shopee.com.br/2VrpYJuVwH',
  },
  {
    id: 'kit-lentes',
    name: 'Kit porta-lentes',
    blurb: 'Estojo com espelho, pinça e aplicador.',
    image: asset('produto-kit-lentes.png'),
    href: 'https://s.shopee.com.br/4qFkOASkqj',
  },
]
