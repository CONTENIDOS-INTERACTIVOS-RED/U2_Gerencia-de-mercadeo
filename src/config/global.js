export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Estrategia de mercadeo y planificación',
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
        titulo: 'Elementos básicos de la estrategia de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Segmentación del mercado',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Selección del mercado objetivo (targeting)',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Posicionamiento',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Propuesta de valor',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Planificación estratégica en mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Plan estratégico de mercado',
            hash: 't_2_1',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El <b>MIX DE MARKETING</b> (4Ps y 7Ps)',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Implementación y control de la estrategia de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Evaluación de la estrategia de mercadeo',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Control de la estrategia comercial',
            hash: 't_4_2',
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
        'Mejía Trejo, J. (2017). Mercadotecnia digital: una descripción de las herramientas que apoyan la planeación estratégica de toda innovación de campaña web: ( ed.). Grupo Editorial Patria.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/40496?page=7',
    },
    {
      referencia:
        'SELLERS RUBIO, R. Introducción al marketing. ed. San Vicente(Alicante): ECU, 2013. 253 p.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/62288?page=69',
    },
    {
      referencia:
        'MARTÍNEZ SÁNCHEZ, J. M. Marketing. ed. Miami, FL: Firmas Press, 2010. 195 p.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/36395?page=181',
    },
    {
      referencia:
        'MARTÍNEZ SÁNCHEZ, J. M. Marketing. ed. Miami, FL: Firmas Press, 2010. 195 p.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/36395?page=179',
    },
  ],
  glosario: [
    {
      termino: 'Análisis FODA',
      significado:
        'Herramienta de planificación estratégica que permite identificar las Fortalezas, Oportunidades, Debilidades y Amenazas de una empresa o marca, para tomar decisiones basadas en su situación interna y el entorno.',
    },
    {
      termino: 'Clientes objetivo (Target)',
      significado:
        'Segmento específico del mercado al que una empresa dirige sus esfuerzos de mercadeo, basándose en características como edad, ubicación, comportamiento de compra, entre otros.',
    },
    {
      termino: 'Control de marketing',
      significado:
        'Evaluación continua de las estrategias y acciones de mercadeo para verificar si se están alcanzando los objetivos planteados y hacer ajustes cuando sea necesario.',
    },
    {
      termino: 'Estrategia de diferenciación',
      significado:
        'Táctica mediante la cual una empresa busca destacar su producto o servicio frente a la competencia, ofreciendo características únicas que generen valor para el cliente.',
    },
    {
      termino: 'Implementación de la estrategia de mercadeo',
      significado:
        'Fase en la que se ponen en práctica los planes y tácticas diseñados, asignando recursos, estableciendo responsabilidades y ejecutando acciones específicas para alcanzar los objetivos de mercadeo.',
    },
    {
      termino: 'Marketing mix (Mezcla de mercadeo)',
      significado:
        'Conjunto de herramientas o variables (producto, precio, plaza, promoción, y en servicios también personas, procesos y evidencia física) que una empresa utiliza para alcanzar sus objetivos de mercadeo.',
    },
    {
      termino: 'Mercado meta (Segmento de mercado)',
      significado:
        'Grupo de consumidores con características similares que comparten necesidades o deseos específicos que una empresa busca satisfacer.',
    },
    {
      termino: 'Planificación estratégica de mercadeo',
      significado:
        'Proceso sistemático mediante el cual se definen los objetivos de mercadeo, se analizan recursos y el entorno, y se diseñan estrategias para lograr ventajas competitivas sostenibles.',
    },
    {
      termino: 'Posicionamiento',
      significado:
        'Imagen o percepción que tiene el público sobre una marca o producto en relación con la competencia, influenciada por factores como calidad, precio o beneficios diferenciales.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Declaración clara del beneficio que una empresa ofrece a sus clientes, explicando por qué su producto o servicio es la mejor opción para resolver sus necesidades.',
    },
  ],
}
