<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Objetivos del mercadeo'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-4.mx-0
        .col-12.col-xl-8.d-flex.align-items-center.bg-morado-claro.p-4(data-aos="fade-up")
          p.mb-0 El mercadeo, también conocido como <i>marketing</i>, tiene como finalidad principal <b>crear valor para el cliente y generar relaciones rentables para la organización</b>. En este sentido, sus objetivos abarcan diversas áreas estratégicas que permiten a las empresas comprender, atraer, retener y fidelizar a sus clientes. Estos objetivos se enfocan en aumentar las ventas, y en posicionar adecuadamente la marca, satisfacer las necesidades del consumidor y lograr una ventaja competitiva sostenible en el tiempo.
        .d-none.d-xl-block.col-4.px-0
          img.h-100(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')
      
      p.mb-4 A continuación, se detallan los principales objetivos del mercadeo:

      .row.mb-4
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Identificar y comprender las necesidades del mercado")
              p El mercadeo parte del análisis profundo del entorno y del comportamiento del consumidor. Este objetivo implica investigar el mercado para:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Detectar oportunidades de negocio.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Comprender los deseos, necesidades y preferencias, del público objetivo.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Segmentar adecuadamente el mercado.
              span El conocimiento del cliente es la base sobre la cual se diseñan productos o servicios relevantes.
            .div(titulo="Desarrollar productos y servicios que satisfagan al cliente")
              p Una vez identificadas las necesidades del consumidor, el mercadeo busca guiar el desarrollo de bienes o servicios que:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Sean útiles, funcionales y diferenciados.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Cumplan con estándares de calidad.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Generen una experiencia de consumo positiva.
              span Este objetivo está alineado con la propuesta de valor de la empresa.
            .div(titulo="Diseñar estrategias de posicionamiento y diferenciación")
              p El mercadeo trabaja en cómo se desea que los consumidores perciban la marca, producto o servicio. Este objetivo busca:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Crear una identidad clara y consistente.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Resaltar características que diferencien a la oferta frente a la competencia.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Establecer un lugar en la mente del consumidor.
              span Un posicionamiento efectivo, es clave para la toma de decisiones de compra.
            .div(titulo="Atraer y captar clientes")
              p A través de acciones promocionales, campañas publicitarias y técnicas de comunicación, el mercadeo busca atraer a nuevos clientes. Esto se logra mediante:
              p.text-bold Publicidad efectiva.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Estrategias de contenido y redes sociales.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Promociones, descuentos y pruebas gratuitas.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Alianzas estratégicas.
              span La captación debe ser coherente con los valores de la marca y el perfil del cliente.

      .row.mb-5
        .col-12.col-lg-7.col-xl-8
          AcordionA(tipo="b")
            .div(titulo="Fidelizar a los clientes existentes")
              p Una vez que el cliente ha sido conquistado, el mercadeo busca mantener la relación a largo plazo mediante:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Programas de fidelización.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Servicio postventa de calidad.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Comunicación constante y personalizada.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Escucha activa de opiniones y sugerencias.
              span Este objetivo se basa en que <b>retener clientes es más rentable que captar nuevos</b>.
            .div(titulo="Incrementar la participación de mercado y las ventas")
              p El mercadeo se orienta a aumentar la cuota de mercado y maximizar los ingresos a través de:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Ampliación de canales de distribución.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Penetración en nuevos mercados o segmentos.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Venta cruzada (<i>cross-selling</i>) o venta incremental (<i>up-selling</i>).
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Estrategias de precios adaptadas a la demanda.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Se busca un crecimiento sostenido con base en decisiones estratégicas.
            .div(titulo="Consolidar la imagen y reputación de la marca")
              p Otro objetivo clave es gestionar la percepción del público sobre la marca o empresa, garantizando:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Coherencia en los mensajes.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Responsabilidad social y ambiental.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Manejo adecuado de crisis.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Fortalecimiento de la confianza del consumidor.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Una buena reputación genera valor intangible para la empresa.
            .div(titulo="Medir y optimizar el desempeño de las estrategias de mercadeo")
              p.text-bold Medir y optimizar el desempeño de las estrategias de mercadeo
              p El mercadeo moderno es <b>medible y ajustable</b>. Por tanto, uno de sus objetivos es:
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Establecer indicadores claves de desempeño (KPIs).
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Analizar métricas como retorno de la inversión (ROI), tasa de conversión, <i>engagement</i>, entre otros.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Corregir y adaptar las acciones, según los resultados.
              .div.d-flex
                img(src='@/assets/componentes/arrow.svg', alt='Texto que describa la imagen' style='width: 16px').me-2.h-100.mt-2
                p Esto permite una gestión eficiente basada en datos.
        .col-12.col-lg-5.col-xl-4.d-none.d-lg-block(data-aos="zoom-in")
          img(src='@/assets/curso/unidad/img-34.png', alt='Texto que describa la imagen')

      .bg-full-width.border-top-9-azul
        .px-5.pt-5.pb-0
          h2 Material complementario
          .row
            .col-12.col-md-6.col-lg-8
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://www.redalyc.org/articulo.oa?id=10900302") Zapata Guerrero, E. E. (2001). La efectividad del mercadeo en las pequeñas y medianas empresas (Pymes) de los sectores industrial y de servicios del departamento de Boyacá, Colombia. Revista Colombiana de Marketing.
              
              p.d-flex.my-4
                img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
                a.text-small.text-primary(target="_blank", href="https://youtu.be/lvXbjeykTmU?si=l4X_suK2VzHliBHo") [Vídeo] SEO y Estadistica (2016) - Los 4 objetivos del Marketing digital
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
