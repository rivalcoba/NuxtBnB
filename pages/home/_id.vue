<template>
  <div class="">
    <div style="display:flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
        alt="Home Image"
      />
    </div>
    {{ home.title }}<br />
    {{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" alt="map marker" width="20" height="20" />
    {{ home.location.address }} {{ home.location.city }}
    {{ home.location.state }} {{ home.location.country }} <br />
    <img src="/images/star.svg" alt="map marker" width="20" height="20" />
    {{ home.reviewValue }} <br />
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds,
    {{ home.bathrooms }} bathrooms <br />
    {{ home.description }}
    <div style="height:800px;width:800px;" ref="map"></div>
  </div>
</template>

<script>
import homes from '~/data/homes';
if (process.client) {
  window.initMap = function() {
    console.log('test');
  };
}
export default {
  head() {
    return {
      title: this.home.title,
      script: [
        {
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyB65_DgG6iJsmhDOG4UkN1t3gfVErC7D5M&library=places&callback=initMap',
          hid: 'map',
          defer: true, // Le indica al navegador que cargue los scripts hasta que termine de cargar el HTML
          skip: process.client && window.mapLoaded,
        },
        {
          innerHTML: 'window.initMap = function(){ window.mapLoaded = true }',
          hid: 'map-init',
        },
      ],
      // __dangerouslyDisableSanitizersByTagID: {
      //   'map-init': ['innerHTML'],
      // },
    };
  },
  data() {
    return {
      home: {},
    };
  },
  // Isomorphics hook
  created() {
    const home = homes.find(home => home.objectID === this.$route.params.id);
    this.home = home;
  },
  // Front Side Hook
  mounted() {
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(
        this.home._geoloc.lat,
        this.home._geoloc.lng
      ),
      disableDefaultUI: true,
      zoomControl: true,
    };
    // Desestructurando la funcionalidad de mapas
    // const { maps } = window.google;
    // Creando un mapa
    const map = new window.google.maps.Map(this.$refs.map, mapOptions);
    // Creando una posición
    const position = new window.google.maps.LatLng(
      this.home._geoloc.lat,
      this.home._geoloc.lng
    );
    // Creando un marcador
    const marker = new window.google.maps.Marker({
      position,
    });
    // Estableciendo el marcador en el mapa
    marker.setMap(map);
  },
};
</script>

<style></style>
