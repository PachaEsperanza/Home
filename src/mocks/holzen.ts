export const heroSlides = [
  {
    type: 'image' as const,
    src: '/Home/images/hero1.jpg',
  },
  {
    type: 'image' as const,
    src: '/Home/images/hero3.jpg',
  },
  {
    type: 'video' as const,
    src: '/Home/videos/hero5.mp4',
  },
  {
    type: 'video' as const,
    src: '/Home/videos/heroo.mp4',
  },
];

export interface Producer {
  name: string;
  location: string;
  story: string;
  image: string;
}

export interface Product {
  id: string;
  tag: string;
  stock: number;
  rating: number;
  overlayName: string;
  overlayOrigin: string;
  overlayPrice: string;
  detailTag: string;
  detailName: string;
  notes: string;
  specs: { label: string; value: string }[];
  image: string;
  priceNum: number;
  priceLabel: string;
  ctaLabel: string;
  producer: Producer & { storyTitle: string };
}

export const products: Product[] = [
  {
    id: 'chuncho',
    tag: 'Variedad Nativa',
    stock: 3,
    rating: 4.9,
    overlayName: 'Caturra Canchaque',
    overlayOrigin: 'Canchaque, Huancabamba · 1,200 msnm',
    overlayPrice: 'desde $7.10 / kg',
    detailTag: 'Canchaque · Huancabamba · Piura',
    detailName: 'Caturra Washed',
    notes: 'Frutas rojas · Jazmín · Panela',
    specs: [
      { label: 'Variedad', value: 'Caturra nativo' },
      { label: 'Proceso', value: 'Lavado 72h' },
      { label: 'Altitud', value: '1,200 msnm' },
      { label: 'Humedad', value: '≤ 7%' },
      { label: 'Precio', value: '$7.10 / kg' },
    ],
    image: '/Home/images/product1.jpeg',
    priceNum: 28,
    priceLabel: '$28.00/kg',
    ctaLabel: 'Quiero conocer su artesanía',
    producer: {
      name: 'Lucía Quispe',
      location: 'Canchaque, Huancabamba',
      storyTitle: 'El renacer de Lucía',
      story: 'A los 19 años, una helada arrasó con toda su cosecha en una sola noche. Sin crédito, sin seguro, sin nadie que la respaldara, Lucía decidió no rendirse. Aprendió sola el proceso de lavado observando a sus vecinos y leyendo lo que encontraba. Tres años después, su Caturra Washed es el más solicitado por tostadoras especializadas en Alemania y Países Bajos.',
      image: '/Home/images/farmer1.jpg',
    },
  },
  {
    id: 'bourbon',
    tag: 'Microlote',
    stock: 5,
    rating: 4.8,
    overlayName: 'Bourbon Rojo Natural',
    overlayOrigin: 'Montero, Ayabaca · 1,500 msnm',
    overlayPrice: 'desde $6.40 / kg',
    detailTag: 'Montero · Ayabaca · Piura',
    detailName: 'Bourbon Natural',
    notes: 'Ciruela · Chocolate negro · Miel',
    specs: [
      { label: 'Variedad', value: 'Bourbon Rojo' },
      { label: 'Proceso', value: 'Natural 10 días' },
      { label: 'Altitud', value: '1,600 msnm' },
      { label: 'Humedad', value: '≤ 7%' },
      { label: 'Precio', value: '$6.40 / kg' },
    ],
    image: '/Home/images/product2.jpeg',
    priceNum: 24,
    priceLabel: '$24.00/kg',
    ctaLabel: 'Quiero conocer su artesanía',
    producer: {
      name: 'Edilberto Rojas',
      location: 'Montero, Ayabaca',
      storyTitle: 'El despertar de Edilberto',
      story: 'Volvió de las fuerzas armadas con las manos vacías y una parcela abandonada. Durante dos años trabajó solo convirtiendo ese terreno en 3 hectáreas de cafetal. Su Bourbon Natural financió la educación universitaria de sus cuatro hijos.',
      image: '/Home/images/farmer2.jpeg',
    },
  },
  {
    id: 'monzon',
    tag: 'Selección Especial',
    stock: 2,
    rating: 5.0,
    overlayName: 'Monzón Heritage',
    overlayOrigin: 'Sicchez, Ayabaca · 1,800 msnm',
    overlayPrice: 'desde $6.30 / kg',
    detailTag: 'Sicchez · Ayabaca · Piura',
    detailName: 'Honey Amarillo',
    notes: 'Durazno · Caña · Madera dulce',
    specs: [
      { label: 'Variedad', value: 'Caturra Amarillo' },
      { label: 'Proceso', value: 'Honey 7 días' },
      { label: 'Altitud', value: '900 msnm' },
      { label: 'Humedad', value: '≤ 7.5%' },
      { label: 'Precio', value: '$6.30 / kg' },
    ],
    image: '/Home/images/product3.jpeg',
    priceNum: 22,
    priceLabel: '$22.00/kg',
    ctaLabel: 'Quiero conocer su artesanía',
    producer: {
      name: 'Rosa Panduro',
      location: 'Sicchez, Ayabaca',
      storyTitle: 'La fuerza de Rosa',
      story: 'Madre soltera de tres hijos, heredó una deuda y un taller que nadie quería tocar. Hoy crea una de las artesanías más complejas y detalladas del Perú, exportando directamente a Europa.',
      image: '/Home/images/farmer3.jpeg',
    },
  },
];

export interface Farmer {
  tag: string;
  tagIcon: string;
  name: string;
  location: string;
  story: string;
  image: string;
  index: string;
  stat: string;
  statLabel: string;
}

export const farmers: Farmer[] = [
  {
    tag: 'Cusco',
    tagIcon: 'ri-seedling-line',
    name: 'Segundo Herrera',
    location: 'Cusco · 1,400 msnm',
    story: 'Artesano de Cusco. Apostó por mantener la técnica tradicional cuando todos cambiaban a métodos industriales, convencido de que la artesanía fina peruana merecía llegar al mundo con su nombre y su historia.',
    image: '/Home/images/farmer4.jpeg',
    index: '01',
    stat: '100%',
    statLabel: 'artesanía tradicional nativa',
  },
];

export const processSteps = [
  {
    n: '01',
    icon: 'ri-seedling-line',
    title: 'Materia Prima',
    subtitle: 'Recursos naturales de altura',
    desc: 'Materiales seleccionados a mano en altitudes de 1,200-1,800m en los valles del Cusco.',
    tags: ['Artesanías', '1,200-1,800m'],
    image: '/Home/images/telar.png',
    color: '#c9a96e',
  },
  {
    n: '02',
    icon: 'ri-hand-heart-line',
    title: 'Elaboración',
    subtitle: 'Trabajo a mano',
    desc: 'Elaboración manual y selectiva por nuestros artesanos. Solo piezas que cumplen el más alto estándar de calidad.',
    tags: ['100% Manual', 'Selectiva'],
    image: '/Home/images/producto1.jpeg',
    color: '#a07850',
  },
  {
    n: '03',
    icon: 'ri-flask-line',
    title: 'Acabado',
    subtitle: 'Proceso artesanal',
    desc: 'Proceso artesanal de 24 a 72 horas de dedicación y detalle. El tiempo y la paciencia perfeccionan cada pieza.',
    tags: ['24-72 horas', 'Artesanal'],
    image: '/Home/images/lana.jpg',
    color: '#d4a853',
  },
  {
    n: '04',
    icon: 'ri-sun-line',
    title: 'Detalle',
    subtitle: 'Sol andino',
    desc: 'Secado y curado natural al sol andino. Sin procesos artificiales que alteren la calidad de la pieza.',
    tags: ['Solar', 'Proceso natural'],
    image: '/Home/images/mano.png',
    color: '#8b6340',
  },
];
