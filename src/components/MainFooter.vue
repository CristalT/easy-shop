<template>
  <footer class="q-pa-xl bg-primary">
    <div class="row">
      <div class="col-md-4 text-center">
        <q-img src="statics/footer-brand.png" alt="BTE" class="footer-logo" />
      </div>
      <div class="col-md-4">
        <div class="title">Mapa del Sitio</div>
        <ul class="site-map">
          <li>Inicio</li>
<<<<<<< HEAD
          <li>Sobre Nosotros</li>
          <li>Marcas</li>
          <li>Contacto</li>
          <li>Catálogo</li>
=======
          <li v-if="aboutUs && aboutUs.text && aboutUs.text.length">Sobre Nosotros</li>
          <li v-if="brands.length">Marcas</li>
          <li v-if="contactData.length || contactFormEnabled">Contacto</li>
          <li v-if="settings.catalogOn">Catálogo</li>
>>>>>>> 7349c49... initial commit
        </ul>
      </div>
      <div class="col-md-4"></div>
    </div>
    <div class="row">
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
  </footer>
</template>
