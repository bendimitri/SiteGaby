export type Social = {
  id: string
  label: string
  href: string
}

export type Product = {
  id: string
  name: string
  blurb: string
  price?: string
  tag: string
  image: string
  href: string
}

export const profile = {
  name: 'https.user.gaby',
  handle: '@https.user.gaby',
  title: 'links da live',
  bio: 'Produtos que eu uso em live!\nOs links estão todos aqui. 💜',
  avatar: './avatar-gaby.jpg',
}

/** Troca estes links pelos teus perfis reais. */
export const socials: Social[] = [
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@https.user.gaby',
  },
]

/** Links da Shopee. Preço: só o número (opcional). */
export const products: Product[] = [
  {
    id: 'paleta',
    name: 'Paleta Athena UCANBE',
    blurb: 'Paleta de pintura facial com 20 cores.',
    tag: 'Makeup',
    image: './produto-paleta.png',
    href: 'https://s.shopee.com.br/6q0oiA3BBb',
  },
  {
    id: 'cilios',
    name: 'Cílios postiços manga',
    blurb: 'Kit com 5 pares, estilo spiky.',
    tag: 'Cílios',
    image: './produto-cilios.png',
    href: 'https://s.shopee.com.br/9V1Zt7MotZ',
  },
  {
    id: 'lentes',
    name: 'Lentes Black Plus',
    blurb: 'Lente de contato 16.0 mm · 6 meses.',
    tag: 'Lentes',
    image: './produto-lentes.png',
    href: 'https://s.shopee.com.br/2VrpYJuVwH',
  },
]
