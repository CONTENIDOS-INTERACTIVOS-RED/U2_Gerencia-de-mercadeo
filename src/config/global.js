export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Introducción al mercadeo: definición, evolución y objetivos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición y conceptos fundamentales del mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipo de mercado',
            hash: 't_1_1',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Evolución del mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Orientación hacia el producto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Orientación hacia las ventas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Orientación hacia el consumidor',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Orientación a la nueva era',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Objetivos del mercadeo',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'El mercadeo en un entorno globalizado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'El mercado bajo una mirada internacional',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Desafíos y retos del marketing internacional',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Algunos ejemplos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Monferrer Tirado, D. (2013). Fundamentos de marketing: ( ed.). Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51743?page=4',
    },
    {
      referencia:
        'Céspedes Sáenz, A. (2010). Principios de mercadeo: (5 ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69059?page=14',
    },
    {
      referencia:
        'Baena Graciá, V. (2011). Fundamentos de marketing: entorno, consumidor, estrategia e investigación comercial: ( ed.). Editorial UOC.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33480?page=9',
    },
    {
      referencia:
        'Sánchez Herrera, J. Merino Sanz, M. J. & Santesmases Mestre, M. (2013). Fundamentos de marketing: ( ed.). Difusora Larousse - Ediciones Pirámide.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/96834?page=19',
    },
    {
      referencia:
        'Monferrer Tirado, D. (2013). Fundamentos de marketing: ( ed.). Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/51743?page=4',
    },
    {
      referencia:
        'Mesa Holguín, M. (2012). Fundamentos de marketing: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69209?page=9',
    },
    {
      referencia:
        'Mesa Holguín, M. (2012). Fundamentos de marketing: ( ed.). Ecoe Ediciones.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/69209?page=9',
    },
    {
      referencia:
        'UAPA. (2023). Marketing internacional: (1 ed.). Universidad Abierta para Adultos (UAPA).',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/243903?page=7',
    },
  ],
  glosario: [
    {
      termino: 'Cliente',
      significado:
        'Persona o empresa que adquiere bienes o servicios ofrecidos por una organización. Es el foco central de las estrategias de mercadeo, ya que su satisfacción determina el éxito comercial.',
    },
    {
      termino: 'Comportamiento del consumidor',
      significado:
        'Conjunto de actividades y procesos mentales que realiza una persona desde que detecta una necesidad hasta que toma la decisión de compra y evalúa su satisfacción.',
    },
    {
      termino: 'Demanda',
      significado:
        'Cantidad de un producto o servicio que los consumidores están dispuestos y pueden adquirir a diferentes precios en un periodo de tiempo determinado.',
    },
    {
      termino: 'Estrategia de mercadeo',
      significado:
        'Plan diseñado por una organización para promover y vender sus productos o servicios, satisfaciendo las necesidades del mercado objetivo de forma competitiva y rentable.',
    },
    {
      termino: 'Mercadeo (Marketing)',
      significado:
        'Conjunto de actividades orientadas a satisfacer necesidades y deseos del consumidor mediante la creación, comunicación, distribución y entrega de valor.',
    },
    {
      termino: 'Globalización',
      significado:
        'Proceso de integración económica, social, política y cultural entre países, que ha ampliado los mercados y ha obligado a las empresas a adaptar sus estrategias de mercadeo a diferentes contextos internacionales.',
    },
    {
      termino: 'Mercado meta (target market)',
      significado:
        'Segmento específico del mercado al cual una empresa dirige sus esfuerzos de mercadeo, basado en características como edad, género, ubicación, comportamiento, entre otros.',
    },
    {
      termino: 'Mix de mercadeo (Marketing Mix)',
      significado:
        'Conjunto de herramientas que las empresas utilizan para alcanzar sus objetivos de mercadeo. Se compone de las 4P: producto, precio, plaza (distribución) y promoción.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Percepción que tiene el consumidor sobre una marca o producto en comparación con la competencia. Es el lugar que ocupa en la mente del cliente.',
    },
    {
      termino: 'Segmentación de mercado',
      significado:
        'Proceso de dividir un mercado en grupos más pequeños de consumidores con características y necesidades similares, con el fin de diseñar estrategias más efectivas.',
    },
  ],
}
