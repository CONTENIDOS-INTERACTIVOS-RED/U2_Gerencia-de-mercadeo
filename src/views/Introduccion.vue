<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Bienvenidos a la Unidad 2, Estrategias de mercadeo y planificación. La presente unidad, ofrece una aproximación integral al análisis estratégico del mercadeo y su adecuada planificación, permitiendo identificar cómo las decisiones en este campo impactan el posicionamiento y la sostenibilidad de las organizaciones. Su estudio se articula con los propósitos generales del curso, dado que fortalece la capacidad de tomar decisiones orientadas al mercado y a las necesidades del cliente.
        .d-flex.bg-naranja-oscuro.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-1.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 A lo largo de esta unidad se invita a reflexionar sobre el valor del mercadeo como función estratégica y no solo operativa, reconociendo su impacto en el crecimiento profesional y el ejercicio laboral en diversas áreas. En este sentido, se espera que el contenido motive al estudiante a aplicar estos conceptos tanto en proyectos académicos como en contextos reales, fomentando una visión crítica y propositiva.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto descriptivo de la imagen')

    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        p.mb-4 El principal resultado de aprendizaje que se busca alcanzar es el desarrollo de la capacidad para analizar de manera estratégica el mercadeo y la planificación, integrando herramientas teóricas y prácticas que favorezcan la formulación de propuestas eficientes, coherentes con los objetivos empresariales. 
        p.mb-4 La unidad se estructura en cuatro temas principales:

        .row.mb-4
          .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
            img(src='@/assets/curso/unidad/img-3.png', alt='Texto que describa la imagen')
          .col-12.col-lg-7.col-xl-8
            AcordionA(tipo="b")
              .div(titulo="Tema 1")
                p Se abordan los elementos básicos de una estrategia de mercadeo, destacando la importancia de conocer el entorno, segmentar el mercado y definir objetivos claros.
              .div(titulo="Tema 2")
                p Se profundiza en la planificación estratégica, entendida como un proceso estructurado que guía la toma de decisiones, desde el análisis situacional hasta la definición de acciones y recursos necesarios para alcanzar los propósitos establecidos.
              .div(titulo="Tema 3")
                p Un componente central de la unidad es el estudio del <i>mix</i> de marketing. Se analiza tanto su versión tradicional de 4Ps (producto, precio, plaza y promoción) como su versión ampliada a 7Ps, que incorpora aspectos propios del sector de servicios: personas, procesos y evidencia física. Este análisis permite entender cómo se combinan estos elementos para construir propuestas de valor diferenciadas.
              .div(titulo="Tema 4")
                p Se examinan los procesos de implementación y control de las estrategias, considerando su seguimiento, evaluación y ajuste, elementos claves para garantizar su efectividad en contextos cambiantes.

    .row.mb-4
      .col-12.col-xl-8
        .bg-morado-oscuro.text-white.p-4(data-aos='fade-up')
          p.mb-4 Se espera una participación activa, responsable y comprometida por parte del estudiante, así como la disposición para analizar casos, proponer soluciones y trabajar colaborativamente.
          span El conocimiento adquirido en la unidad anterior servirá como base para avanzar con mayor profundidad en la comprensión de los conceptos presentados. Bienvenidos.

      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-4.png', alt='Texto descriptivo de la imagen')

    p

</template>
