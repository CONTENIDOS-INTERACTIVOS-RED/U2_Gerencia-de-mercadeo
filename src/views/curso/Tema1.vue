<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Elementos básicos de la estrategia de mercadeo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-3.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto descriptivo de la imagen')
      .col-12.col-xl-9
        .bg-morado-oscuro.p-4.text-white.h-100(data-aos='fade-up')
          span La estrategia de mercadeo es el conjunto de decisiones y acciones planificadas que una organización diseña e implementa con el propósito de alcanzar sus metas comerciales, tales como aumentar las ventas, captar nuevos clientes, fidelizar los existentes y lograr un posicionamiento competitivo sostenible en el mercado. Esta estrategia es un proceso que requiere un enfoque sistemático y orientado al análisis, la innovación y la adaptación constante a los cambios del entorno. Se fundamenta en el conocimiento profundo del mercado, lo cual implica analizar factores internos y externos que pueden incidir en el comportamiento del consumidor, así como identificar tendencias emergentes, nuevas tecnologías, regulaciones y dinámicas competitivas. Entre los pilares esenciales de esta estrategia se encuentran la segmentación del mercado, que permite dividir a los consumidores en grupos más homogéneos; la diferenciación de la oferta, que busca destacar los atributos únicos del producto o servicio frente a la competencia; y la creación de valor, entendida como la capacidad de satisfacer necesidades específicas de forma efectiva y relevante para el cliente.

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Según Monferrer Tirado, D. (2013), una estrategia de mercadeo eficaz debe orientarse a captar la atención del consumidor, y a generar experiencias significativas que promuevan la lealtad y fortalezcan la relación marca cliente. 
        .d-flex.bg-amarillo.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-6.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 Para ello, es fundamental identificar oportunidades de mercado rentables, diseñar propuestas de valor diferenciadas que reflejen los beneficios que el cliente recibirá, y construir relaciones a largo plazo basadas en la confianza, la satisfacción y la comunicación constante. En este sentido, la estrategia de mercadeo actúa como un eje integrador entre los objetivos organizacionales y las necesidades del mercado, permitiendo a la empresa mantener su relevancia, competitividad y sostenibilidad a lo largo del tiempo.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto descriptivo de la imagen')
    
    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Segmentación del mercado

    .row.mb-4
      .col-12.col-lg-10.mx-auto
        p.mb-2.text-bold Segmentar un mercado implica:
        p.mb-3 Dividir un grupo amplio y diverso de consumidores en subgrupos más pequeños que comparten características similares.
        .row.bg-morado-claro.p-4.py-xl-0(data-aos='fade-up')
          .col-4.d-none.d-lg-block
            img(src='@/assets/curso/unidad/img-8.png', alt='Texto descriptivo de la imagen')
          .col-12.col-lg-8.d-flex.p-4.p-xl-0
            p.my-auto  Esta práctica permite a las empresas enfocar mejor sus esfuerzos comerciales, adaptando los productos, mensajes y canales de distribución a las necesidades, preferencias y comportamientos particulares de cada grupo.
      .col-12.col-lg-10.mx-auto
        .row.bg-morado.p-4.py-xl-0(data-aos='fade-up')
          .col-12.col-lg-8.d-flex.p-4.p-xl-0
            p.my-auto.py-xl-4 No todos los consumidores tienen los mismos intereses ni valoran los productos de la misma manera; por eso, conocer quiénes son y qué los motiva resulta fundamental para diseñar estrategias más eficaces.
          .col-4.d-none.d-lg-block
            img(src='@/assets/curso/unidad/img-9.png', alt='Texto descriptivo de la imagen')

    p.mb-4 De acuerdo con Lamb, Toro, J. M. D. & Villanueva, J. (2017), la segmentación facilita la toma de decisiones estratégicas al identificar nichos o grupos de consumidores que presentan un mayor potencial de respuesta positiva hacia la oferta de la empresa. La segmentación no solo mejora la comunicación con el cliente, también optimiza el uso de los recursos y ayuda a construir una identidad de marca más coherente y reconocible.
    p.mb-4 Los pasos para desarrollar una segmentación de mercado, son:

    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Definición del mercado total
              p El primer paso es identificar a qué mercado general se dirige la empresa. Esto incluye a todas las personas o entidades que podrían tener interés o necesidad del producto. En el caso de una línea de maquillaje con beneficios para la piel, el mercado total podría ser todas las personas que usan productos cosméticos.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Selección de criterios de segmentación
              p.mb-3 Una vez delimitado el mercado general, es necesario elegir las variables que se usarán para dividirlo. Estas variables pueden ser:
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p <b>Demográficas:</b> edad, género, nivel de ingresos, ocupación.
              div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p <b>Geográficas:</b> país, ciudad, clima, zona urbana o rural.

              div.d-flex.mb-3
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Psicográficas: estilo de vida, valores, intereses.
              span <b>Conductuales:</b> frecuencia de uso, lealtad a la marca, beneficios buscados.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Identificación de los segmentos
              p En este paso se aplican los criterios seleccionados para agrupar a los consumidores. La idea es formar conjuntos relativamente homogéneos en su comportamiento y necesidades. Cada segmento debe ser medible, accesible, sustancial (es decir, suficientemente grande) y viable en términos comerciales.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Evaluación y selección de los segmentos más atractivos
              p No todos los segmentos detectados tienen el mismo potencial. Es necesario evaluar factores como el tamaño, la rentabilidad esperada, el nivel de competencia y la capacidad de la empresa para atenderlos adecuadamente. Los segmentos más prometedores son seleccionados como <b>mercados meta.</b>
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Desarrollo de perfiles de los segmentos 
              p Se elabora una descripción detallada de cada segmento: quiénes lo conforman, qué desean, qué compran, dónde lo hacen, cómo se informan, qué valores priorizan. Este perfil es útil para diseñar mensajes y propuestas que conecten mejor con ese grupo.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')

    #t_1_2.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.2
        h2 Selección del mercado objetivo (<i>targeting</i>)

    .row.mb-4
      .col-12.col-xl-8
        p.mb-4 Una vez completado el proceso de segmentación y definidos los distintos grupos de consumidores que componen el mercado, el siguiente paso consiste en elegir a cuáles de estos segmentos la empresa dirigirá su estrategia de mercadeo. Esta elección estratégica se denomina selección del mercado objetivo o <i>targeting.</i>
        .d-flex.bg-naranja.p-4.flex-column.flex-md-row.mb-4(data-aos='fade-up')
          img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-15.svg', alt='Texto descriptivo de la imagen')
          .my-auto.p-4.p-xl-0
            p.pe-xl-3.mb-0 El <i>targeting</i> no se limita a escoger un grupo de consumidores de forma arbitraria; requiere una evaluación cuidadosa y comparativa de cada segmento identificado. El objetivo es determinar cuál o cuáles segmentos ofrecen las mejores oportunidades en términos de rentabilidad, factibilidad operativa, alineación con los recursos disponibles y afinidad con la identidad de la marca.
      
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto descriptivo de la imagen')
    h2 ¿Cómo se realiza la selección del mercado objetivo?
    p.mb-4 El proceso de <i>targeting</i> incluye los siguientes pasos:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-17.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Análisis del atractivo de cada segmento")
            p.mb-3En esta etapa, se estudian factores como:
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Tamaño del segmento:</b> ¿Cuántos consumidores potenciales lo componen? ¿Existe una demanda significativa?
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Tasa de crecimiento:</b> ¿Se espera que el segmento aumente en número o poder adquisitivo en el futuro cercano?
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Nivel de competencia:</b> ¿Qué tan saturado está el segmento? ¿Existen marcas fuertes dominándolo?
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Rentabilidad esperada:</b> ¿Es un grupo dispuesto a pagar precios que justifiquen la inversión?
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Estabilidad o sensibilidad al entorno:</b> ¿Qué tan vulnerable es ese grupo a cambios económicos, tecnológicos o sociales?
          .div(titulo="Evaluación de la capacidad de la empresa para atender al segmento")
            p.mb-3 La empresa debe considerar:
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Recursos disponibles (humanos, tecnológicos, logísticos).
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Experiencia previa con clientes similares.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Capacidad de adaptación del producto a las exigencias del segmento.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p Afinidad entre los valores del segmento y los de la marca.
          .div(titulo="Selección de la estrategia de cobertura del mercado")
            p.mb-3 La empresa puede optar por una de las siguientes estrategias de cobertura: 
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b><i>Marketing</i> indiferenciado (masivo):</b> se ignoran las diferencias entre segmentos y se ofrece un producto genérico para todo el mercado. No es recomendable cuando hay diversidad de necesidades.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b><i>Marketing</i> diferenciado (segmentado):</b> se eligen dos o más segmentos y se ofrece una estrategia distinta para cada uno (productos, mensajes, canales).
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b><i>Marketing</i> concentrado (de nicho):</b> se enfoca en un solo segmento con una oferta muy especializada.
            div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b><i>Marketing</i> personalizado (micromarketing):</b> se ajustan los productos y mensajes casi individualmente, como en el marketing digital de precisión.
            span La elección de la estrategia dependerá del análisis realizado, la capacidad de respuesta de la empresa y la naturaleza del producto.
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.3
        h2 Posicionamiento
  
    .row.bg-fondo-1.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3

        .row.mb-4 
          .col-12.col-xl-9
            p.mb-4 El <b>posicionamiento</b> es una fase estratégica del mercadeo que busca establecer una percepción clara, positiva y diferenciada de un producto, servicio o marca en la mente del consumidor. No se trata simplemente de lo que la empresa dice sobre su producto, sino de cómo el cliente lo percibe en comparación con otras alternativas disponibles en el mercado.
            .bg-morado.p-4.mb-4(data-aos='fade-up')
              span Según Martínez Sánchez, J. M. (2010), posicionar consiste en “crear una posición propia en la mente del consumidor”, lo que implica destacar uno o varios atributos que hagan que el producto sea memorable, relevante y preferido frente a sus competidores. Esta percepción debe ser <b>coherente, consistente y significativa</b>, y debe mantenerse a lo largo del tiempo.
            span El posicionamiento influye directamente en la manera en que se comunican los valores del producto, en el diseño del empaque, en los canales de distribución elegidos y en el tono de los mensajes publicitarios. También orienta la experiencia del cliente con la marca, desde el primer contacto hasta la postventa.
          .col-3.d-none.d-xl-block
            img(src='@/assets/curso/unidad/img-18.png', alt='Texto descriptivo de la imagen')
    
    .row
      .col-auto(data-aos='fade-up')
        .bg-naranja-oscuro.p-4.mb-4
          span.text-bold ¿Cómo se desarrolla una estrategia de posicionamiento? 
    
    .row.position-relative.mb-5.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Identificación de los atributos relevantes para el cliente
              p Se debe analizar qué características, beneficios o valores son más importantes para el mercado objetivo. Estos pueden incluir calidad, precio, facilidad de uso, sostenibilidad, innovación, respaldo profesional, entre otros.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Análisis de la competencia
              p Implica estudiar cómo están posicionadas otras marcas que ofrecen productos similares. ¿Qué promesas hacen? ¿Cómo se comunican? ¿Qué imagen proyectan? Este análisis permite identificar <b>espacios no ocupados</b> o debilidades que puedan ser aprovechadas.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-20.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Determinación de la propuesta de valor
              p Es el conjunto de beneficios funcionales, emocionales o simbólicos que la marca ofrece al consumidor. Esta propuesta debe ser <b>única, creíble y deseada por el público meta</b>. Debe responder a la pregunta: ¿por qué elegir este producto y no otro?
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-21.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Formulación del enunciado de posicionamiento
              p El enunciado sintetiza cómo la marca desea ser percibida. Una fórmula común es:<br><br>Para <i>[segmento objetivo], [marca] es [categoría del producto] que ofrece [beneficio clave] porque [justificación o evidencia del valor].</i><br><br>Este enunciado sirve como guía para la estrategia comunicativa, pero no se utiliza como mensaje publicitario literal.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-22.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Implementación y consistencia del posicionamiento
              p Una vez definido, el posicionamiento debe aplicarse de manera uniforme en todos los puntos de contacto con el cliente: publicidad, empaque, sitio web, atención al cliente, experiencia en tienda, entre otros. La coherencia en todos los niveles es fundamental para consolidar la percepción deseada.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')

    #t_1_4.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.4
        h2 Propuesta de valor

    p.mb-4 La propuesta de valor es uno de los elementos fundamentales de la estrategia de mercadeo, dado que representa la promesa que una empresa hace a sus clientes sobre los beneficios específicos que recibirán al elegir sus productos o servicios. Es mucho más que una simple descripción del producto: implica explicar cómo y por qué la oferta de la empresa resuelve un problema o mejora la vida del consumidor, de una manera mejor que las alternativas existentes.
    p.mb-4 Monferrer Tirado, D. (2013), afirman que <b>una buena propuesta de valor debe ser:</b>

    .row.bg-naranja.p-4.py-xl-0.mb-4(data-aos='fade-up')
      .col-12.col-xl-8.d-flex
        .my-auto
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Clara:</b> fácil de entender por el público al que se dirige.
          div.d-flex
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Convincente:</b> debe mostrar por qué vale la pena elegir esa marca.
          div.d-flex.mb-4
            img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
            p <b>Difícil de imitar:</b> para asegurar una ventaja competitiva sostenible en el tiempo.
          span La propuesta de valor es la base sobre la cual se diseñan todas las decisiones estratégicas del <i>marketing</i>, desde el desarrollo del producto hasta la comunicación, la distribución y el servicio al cliente.
      .col-4.d-none.d-xl-block
        img(src='@/assets/curso/unidad/img-24.png', alt='Texto descriptivo de la imagen') 

    .row.bg-fondo-2.bg-full-width.py-4.mb-4
      div.px-5

        h2 Componentes de una propuesta de valor
        p.mb-4 Una propuesta de valor efectiva suele integrar tres dimensiones:

        .row.justify-content-center
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-25.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Valor funcional
              p.px-1.text-small.mb-0.text-center Qué necesidad práctica satisface el producto. (Ej. protección solar, tratamiento antiacné).
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-26.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Valor emocional
              p.px-1.text-small.mb-0.text-center Cómo hace sentir al consumidor. (Ej. seguridad, autoestima, bienestar).
          .col-10.col-md-8.col-lg-6.col-xl-4.mx-auto.mb-4.mb-xl-0(data-aos='zoom-in')
            .custom-image-card.d-flex.flex-column.p-4.py-md-5
              img.mx-auto.mb-4(src='@/assets/curso/unidad/img-27.svg', style='width: 80px')
              p.text-bold.mb-4.text-center Valor simbólico
              p.px-1.text-small.mb-0.text-center Qué representa usar esa marca. (Ej. estilo de vida saludable, conciencia ecológica, sofisticación).

    .row
      .col-auto
        .bg-naranja-oscuro.p-4(data-aos='fade-up')
          span.text-bold ¿Cómo se construye una propuesta de valor?
    
    ImagenInfografica.color-secundario.mb-5.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-28.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='28.6%' y='20%' numero='+')
        .h5.mb-2 Comprensión del cliente
        p Antes de prometer beneficios, es necesario conocer bien al consumidor: ¿Qué desea? ¿Qué le preocupa? ¿Qué le incomoda de las opciones actuales? Aquí se integran los resultados del proceso de segmentación y <i>targeting.</i>
      .tarjeta.bg-white.p-4(x='73%' y='28%' numero='+')
        .h5.mb-2 Diseño de beneficios diferenciales
        p El producto o servicio debe ofrecer algo que no esté disponible fácilmente en la competencia o que lo haga de una forma más eficaz o deseable. Puede tratarse de una combinación única de características, de una experiencia superior, o de un modelo de atención más humano o accesible.
      .tarjeta.bg-white.p-4(x='78.1%' y='56.6%' numero='+')
        .h5.mb-2 Redacción de la propuesta de valor
        p Debe ser una declaración concisa, relevante y diferenciadora. Puede adoptar diferentes formas, según el canal o público (más técnica para inversores, más emocional para campañas publicitarias), pero su esencia debe ser consistente.
      .tarjeta.bg-white.p-4(x='23.4%' y='61%' numero='+')
        .h5.mb-2 Identificación del problema o necesidad a resolver
        p Toda propuesta de valor parte de la solución a un problema real o percibido. El producto debe aportar una mejora tangible (física, emocional o social).

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=99342682007") Estrategias de mercadeo verde utilizadas por empresas a nivel mundial
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/VXgXPTRwPCA?si=Rk0KUInzX60T7rVz") [Vídeo] Fundamentos del marketing estratégico - OA U2
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/svdtFJqViHo?si=QBDvaff2BCtZ7fJ8") [Vídeo] MKTING1-S1: Aspectos generales del marketing
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')

    p

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
