<template>
  <div>
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: left; margin: 10px"
    >
      <home-card :home="home" />
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
