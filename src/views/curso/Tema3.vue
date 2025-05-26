<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. El MIX DE MARKETING (4Ps y 7Ps)'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.bg-morado-oscuro.bg-full-width.p-4.py-xl-0.mb-4(data-aos='fade-up')
        .col-2.d-none.d-xl-block
          img(src='@/assets/curso/unidad/img-43.png', alt='Texto descriptivo de la imagen') 
        .col-12.col-xl-10.d-flex
          .my-auto
            p.text-white.mb-0 El <i>Marketing Mix</i> o mezcla de mercadeo, es un conjunto de herramientas estratégicas que permiten a las organizaciones definir y coordinar las acciones necesarias para posicionar un producto o servicio en el mercado. Tradicionalmente, se compone de cuatro variables fundamentales conocidas como las 4 P’s: Producto, Precio, Plaza y Promoción.

      p.mb-4 <b>Figura 2.</b> Las 4P del marketing
      figure.mb-4
        img.mb-2(src='@/assets/curso/unidad/img-44.png', alt='Texto que describa la imagen')

      p.mb-4 El <b><i>marketing mix</i> de las 7 P’s</b> es una ampliación del modelo tradicional de las 4 P’s (Producto, Precio, Plaza y Promoción), que añade tres variables estratégicas importantes en el ámbito de los servicios: <b>Personas, Procesos y Evidencia física.</b> Esta versión extendida es especialmente útil en industrias orientadas al cliente, como la salud, la educación, el turismo, la belleza y otros servicios intangibles.
      p.mb-4 <b>Figura 3.</b> Las 7P del marketing

      .row.mb-4
        .col-10.col-xl-6.mx-auto
          img(src='@/assets/curso/unidad/img-45.png', alt='Texto descriptivo de la imagen')
        .col-10.col-xl-6.mx-auto
          .row
            .col-12
              .bg-amarillo.p-4(data-aos='fade-up')
                p.mb-4 Este modelo proporciona una estructura que permite diseñar y ejecutar estrategias centradas en el cliente, alineando los recursos y capacidades de la empresa con las condiciones del entorno de mercado.
                span El objetivo general del <i>marketing mix</i> es lograr una oferta de valor coherente y competitiva, que permita satisfacer las necesidades y deseos del público objetivo, alcanzando al mismo tiempo los propósitos comerciales de la empresa, como el crecimiento, la rentabilidad y la fidelización del cliente.
            .col-12.d-none.d-xl-block
              img(src='@/assets/curso/unidad/img-46.png', alt='Texto descriptivo de la imagen')

      .row.bg-morado.bg-full-width.py-4.mb-5
        div.px-5.pb-md-3.py-4.d-flex
          .d-none.d-xl-block.col-xl-5.mx-auto.mt-4.mt-xl-0(data-aos="zoom-in")
            img.h-100(src='@/assets/curso/unidad/img-47.png', alt='Texto que describa la imagen')
          .col-12.col-xl-7.d-flex.ps-4.ps-xl-5.align-items-center.flex-column
            h2.mb-4.pb-2.me-auto Las 7P
            p.mb-5(data-aos="fade-up") La mezcla ampliada de <i>marketing</i>, conocida como las 7P, es un marco esencial para diseñar estrategias integrales que consideren tanto aspectos tangibles como intangibles de la oferta empresarial. En el PDF Las 7P, se examinan en profundidad los elementos clave del producto, precio, plaza, promoción, personas, procesos y evidencia física, presentando criterios, objetivos y ejemplos que permiten analizar y mejorar cada componente del <i>marketing mix</i> en función del mercado y del cliente.
            a.d-flex.me-auto.w-fit.bg-white.box-shadow.cursor-pointer(data-aos="fade-up" :href="obtenerLink('/downloads/.pdf')" target="_blank")
              img.h-100(style="width: 48px" src='@/assets/componentes/pdf-icon-square.svg', alt='Texto que describa la imagen')
              p.text-small.fs-14px.my-auto.px-2 <strong>Anexo.</strong> Las 7P
      
      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=672271513005") Dinamismo en el marketing mix y desempeño: evidencias obtenidas en empresas comerciales
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/A3aN7-leyMc?si=151eZag32v9kmZMe") [Vídeo] ¿Qué es el MARKETING MIX? - Análisis y ejemplos de las 4Ps de la mercadotecnia / Niveles del producto
            .col-12.col-md-6.col-lg-3
              figure
                img(src='@/assets/componentes/material-complementario.svg' alt='Imagen de material complementario')


      p
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
