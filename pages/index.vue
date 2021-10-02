<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: left; margin: 10px"
    >
      <!-- 
    Si agregamos a nuxt-link el atributo
    no-prfetch no pre cargara la información
    esto es recomendable hacerlo en caso de que
    se tenga mucho trafico en la carga inicial de la pagina 
    -->
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// As nuxt use webpack we can import like this
import data from '~/data/homes';
export default {
  // Agregando meta local
  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'This is a homepage!!',
          hid: 'description',
        },
      ],
    };
  },
  data() {
    return {
      homes: data.slice(0, 3),
    };
  },
};
</script>

<style></style>
