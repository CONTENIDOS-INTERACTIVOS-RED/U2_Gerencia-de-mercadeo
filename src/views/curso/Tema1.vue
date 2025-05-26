<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Definición y conceptos fundamentales del mercadeo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 La comprensión de los conceptos básicos del mercadeo es esencial para quienes se desempeñan en contextos empresariales, ya que permite identificar las dinámicas del mercado y establecer estrategias orientadas a satisfacer las necesidades del consumidor.
    .row.bg-morado.bg-full-width.py-4.mb-4
      div.px-5.pb-md-3.py-4.d-flex
        .col-12.col-xl-7.d-flex.pe-4.pe-xl-5.align-items-center.flex-column
          h2.mb-4.pb-2.me-auto Definición y conceptos fundamentales del mercadeo
          p.mb-5(data-aos="fade-up") En el PDF Definición y conceptos fundamentales del mercadeo, se exploran las nociones clave que sustentan esta disciplina, incluyendo su significado, origen, evolución conceptual y relación con el sistema económico. A través de este análisis, se sientan las bases para interpretar el papel del mercadeo en el desarrollo social, económico y organizacional, reconociendo su impacto en la toma de decisiones y en la creación de valor dentro de una economía dinámica y competitiva.
          a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/Anexos_Definicion_y_conceptos_mercadeo.pdf')" target="_blank")
            img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
            p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Definición y conceptos fundamentales del mercadeo 
        .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
          img.h-100(src='@/assets/curso/unidad/img-8.png', alt='Texto que describa la imagen')

    #t_1_1.titulo-segundo(data-aos="flip-up")
      div.d-flex
        span.me-3 1.1
        h2 Tipo de mercado

    p.mb-4 Los mercados pueden clasificarse de diversas formas, dependiendo de la cantidad de participantes, del tipo de productos que se comercializan o de las características de los consumidores. Cada una de estas categorías ayuda a comprender mejor, en distintos contextos, cómo funciona la dinámica comercial.

    h2 Según la cantidad de participantes en el mercado
    p.mb-4 Existen diferentes estructuras de mercado, dependiendo de cuántos compradores y vendedores intervienen en él:

    ImagenInfografica.color-secundario.mb-4.bg-white
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-9.png', alt='Descripción de la imagen')
      .tarjeta.bg-white.p-4(x='25.5%' y='35%' numero='+')
        .h5.mb-2 Monopolio
        p Donde solamente hay una empresa que ofrece un producto o servicio, mientras que los consumidores son muchos. En este caso, la empresa controla totalmente el mercado, puesto que no tiene competencia directa, y generalmente existen barreras que impiden la entrada de nuevos competidores. 
      .tarjeta.bg-white.p-4(x='37.2%' y='16%' numero='+')
        .h5.mb-2 Oligopolio
        p Se da cuando pocas empresas dominan la oferta del mercado, aunque los consumidores siguen siendo numerosos. Estas empresas pueden influir en los precios, porque su reducido número les permite tener cierto control sobre las condiciones del mercado.
      .tarjeta.bg-white.p-4(x='60%' y='16%' numero='+')
        .h5.mb-2 Competencia monopolística
        p Es uno de los tipos más comunes. Aquí, hay muchas empresas que ofrecen productos similares, pero con características que los diferencian, como el diseño, la calidad o la marca, y también cuenta con muchos compradores. Esto da lugar a un entorno donde las decisiones de consumo se ven influenciadas, tanto por el precio como por la percepción del valor del producto.
      .tarjeta.bg-white.p-4(x='74.5%' y='35%' numero='+')
        .h5.mb-2 Competencia perfecta
        p Modelo teórico donde muchas empresas venden productos completamente iguales y ningún productor puede influir en el precio. En este tipo de mercado, los precios se determinan de forma natural por la interacción entre la oferta y la demanda, y cada empresa simplemente decide cuánto producir en función de ese precio de equilibrio.

    h2 Según el tipo de producto que se comercializa

    p.mb-4 Cuando se observa el tipo de producto o transacción que se realiza, también es posible dividir los mercados en diferentes clases:

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-10.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Mercado abierto")
            p Está relacionado con la compra y venta de fondos públicos, siendo gestionado generalmente por el banco central de un país. Este mercado cumple un papel importante en el control de la economía.
          .div(titulo="Mercado de cambios")
            p Se refiere a la compraventa de divisas o monedas extranjeras. Puede operar al contado, cuando las transacciones se liquidan de forma inmediata, o a futuro, si se pacta la entrega y el pago de la divisa para una fecha determinada más adelante.
          .div(titulo="Mercado de capitales")
            p Donde se realizan operaciones financieras a mediano y largo plazo. Este se divide en dos grandes áreas: 
            .div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Mercado de crédito</b>, que funciona mediante préstamos ofrecidos por bancos o entidades financieras.
            .div.d-flex
              img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
              p <b>Mercado de valores</b>, donde se negocian acciones, bonos y otros títulos a través de la bolsa.
          .div(titulo="Mercado de futuros")
            p Es otro tipo particular, donde se negocian contratos para comprar o vender productos en una fecha futura, pero a un precio acordado de antemano. Es útil para protegerse contra la variación de precios.
          .div(titulo="Mercado negro")
            p Agrupa aquellas transacciones que se realizan fuera del marco legal, como la compraventa de productos ilegales o sin registro.

    h2 Según las características de los consumidores

    p.mb-4 Otra forma de clasificar los mercados, es observando quiénes son los compradores:

    .row.position-relative.mb-0.py-4.bg-fondo-slider.bg-full-width
      div.px-4.px-md-5.py-md-3
        SlyderA(tipo="b").bg-white
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Mercado de consumo
              p Está compuesto por individuos o familias que adquieren productos para su uso personal. Es el más visible, debido a que abarca productos cotidianos como alimentos, ropa, electrodomésticos, entre otros.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Mercado de servicios
              p En este mercado, lo que se ofrece no son productos físicos, sino actividades o prestaciones como la educación, la salud, el transporte o los servicios financieros, que los consumidores requieren en su día a día.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-12.png', alt='Texto que describa la imagen')
          .row.p-4.px-md-5.py-lg-5.justify-content-between
            .col-md-12.col-lg-7.mb-4.mb-md-0.d-flex.flex-column.justify-content-center
              p.text-bold Mercado de negocios
              p O también llamado mercado industrial, está formado por empresas que compran bienes y servicios a otras organizaciones. Lo hacen con el objetivo de usarlos en sus procesos productivos, integrarlos en nuevos productos o revenderlos. Este mercado es muy importante porque genera un volumen de transacciones elevado y requiere un enfoque comercial más técnico y estratégico.
            .d-none.d-lg-block.col-md-6.col-lg-5(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/unidad/img-13.png', alt='Texto que describa la imagen')

    .d-flex.align-items-start.bg-amarillo-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-4
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-49.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0 En conjunto, los mercados de consumo, de servicios y de negocios, representan gran parte del movimiento económico mundial. Por eso, conocer sus características es fundamental para cualquier profesional que se dedique al <i>marketing</i>, dado que permite diseñar estrategias adecuadas a las necesidades de cada tipo de cliente.

    h2 Factores básicos del mercadeo

    .row.mb-4
      .col-4.d-none.d-xl-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-14.png', alt='Texto que describa la imagen')
      .col-12.col-xl-8
        .mb-4.bg-morado-claro.p-4(data-aos="fade-left")
          span Para lograr un resultado favorable dentro de un mercado específico, tanto la empresa como la persona encargada de las actividades de mercadeo, cuentan con un conjunto de elementos que pueden utilizar y adaptar, según las metas que se propongan alcanzar. Estos elementos, que pueden ser organizados y combinados de diferentes maneras dependiendo de la estrategia, conforman lo que se conoce como la mezcla de mercadeo o <i>marketing mix</i>.
        span Estos elementos, pueden adaptarse y combinarse, según las metas de la organización; conforman lo que comúnmente se llama la mezcla de mercadeo o <b>marketing mix</b>. Pero en lugar de limitarse a las tradicionales 4P del <i>marketing</i> (Producto, Precio, Plaza y Promoción), esta representación amplía el concepto, incluyendo 12 elementos:

    .row.mb-4
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Producto")
            p Se refiere a lo que se ofrece al mercado, que puede ser un bien o servicio. Debe satisfacer una necesidad o deseo del consumidor.
          .div(titulo="Precio")
            p Es el valor monetario que el cliente debe pagar para adquirir el producto. Incluye estrategias de fijación de precios competitivos.
          .div(titulo="Comunicación")
            p Abarca todas las formas en las que la empresa informa y persuade a los clientes, como la publicidad, promoción y <i>marketing</i> digital.
          .div(titulo="Distribución")
            p Trata de cómo hacer llegar el producto al consumidor final, incluyendo canales de venta, puntos de distribución y cobertura geográfica.
          .div(titulo="Empaque")
            p No solo protege el producto, también comunica, atrae visualmente y puede influir en la decisión de compra.
          .div(titulo="Poder")
            p Hace referencia al nivel de influencia que tiene la empresa o marca en el mercado, frente a sus competidores, canales o clientes.
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
        img(src='@/assets/curso/unidad/img-16.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7.col-xl-8
        AcordionA(tipo="b")
          .div(titulo="Relaciones públicas")
            p Son acciones que buscan mejorar la imagen y la relación de la empresa con diferentes públicos, como medios, comunidades y autoridades.
          .div(titulo="Inteligencia de mercados")
            p Consiste en recopilar y analizar información sobre los consumidores, la competencia y las tendencias del mercado, para tomar decisiones acertadas.
          .div(titulo="Servicio postventa")
            p Incluye todo el acompañamiento al cliente después de la compra, como garantías, soporte técnico y atención al cliente.
          .div(titulo="Marca")
            p Es la identidad del producto o empresa. Una marca fuerte, genera confianza y preferencia.
          .div(titulo="Logística")
            p Implica la gestión eficiente de los recursos, tiempos y movimientos, para que el producto esté disponible en el momento y lugar adecuados.
          .div(titulo="Innovación")
            p Aporta valor a través de la mejora constante en productos, procesos o formas de atención, permitiendo a la empresa mantenerse competitiva.

    .d-flex.align-items-start.bg-morado-oscuro.bg-full-width.p-4(data-aos='fade-up').d-flex.align-items-center.flex-column.flex-md-row.mb-5
      img.me-3(style='width: 90px' src='@/assets/curso/unidad/img-17.svg', alt='Texto descriptivo de la imagen')
      .my-auto.p-4.p-xl-0
        p.pe-xl-3.mb-0.text-white Esta mezcla no es rígida, sino que debe adaptarse, según las necesidades del mercado, el perfil del consumidor y los recursos de la empresa.

    .bg-full-width.border-top-9-azul
      .px-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=151330912008") Vélez Maya, T. (2005). Mercadeo de servicios. Un documento para Fundamentos de Mercadeo. Revista Ciencias Estratégicas.
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/AWLWbo-lf5s?si=NxvubGWhlwcx6qoQ") [Vídeo] Universidad Continental (2024) - Concepto de marketing y creación de valor
            
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/6Arwtzh9-Go?si=w--APC2MaxmZ0BIu") [Vídeo] Universidad de Deusto (2025) - Fundamentos de Marketing: El proceso de compra
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
