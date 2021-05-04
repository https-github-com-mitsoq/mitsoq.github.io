<template>
  <div class="intro">
    <h1 class="heading heading--primary">{{ msg }}</h1>
    <p class="para">
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a class="cta-text" href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    props: {
      msg: String
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* HEADING */
  .heading--micro {
    margin: 40px 0 0;
  }
</style>