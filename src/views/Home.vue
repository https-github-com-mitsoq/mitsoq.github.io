<template>
    <div class="container">
        <h1 class="heading heading--primary">Welcome to mitsoq.github.io</h1>
    </div>
</template>

<script>

  export default {
    name: 'Home',
    mounted () {
        console.log('Home component')
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /* LIST */
    .std-list {
        list-style-type: none;
        padding: 0;
        text-align: left;
    }
    .std-list__item {
        display: block;
        margin: 0 10px;
    }
    .cta-text {
        color: #42b983;
    }

    /* CONTAINER */
    .container-inner {
        align-items: flex-start;
        display: flex;
        justify-content: center;
    }
    .container-inner__item {
        margin: 0 50px 0;
    }

    .heading {
        font-size: 20px;
    }
    .heading--primary {
        text-transform: uppercase;
    }
</style>
