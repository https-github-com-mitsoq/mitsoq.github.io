<template>
  <div id="header" class="header">
      <nav></nav>
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list__item">
            <a class="cta-text" href="/" target="_top" rel="noopener">Home</a>
          </li>
          <li class="menu-list__item">
            <a class="cta-text" href="/about-us" target="_top" rel="noopener">About</a>
          </li>
          <li class="menu-list__item">
            <a class="cta-text" href="https://cli.vuejs.org" target="_blank" rel="noopener">Vue guide</a>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      src: String,
      alt: String,
    }
  };
</script>


<style scoped>
  .header {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .menu-list {
    display: block;
    font-style: none;
    margin: 0 auto;
  }
  .menu-list__item {
    display: inline-block;
    margin: 0 5px 0 0;
  }

  .cta-text {
    color: gray;
    text-transform: lowercase;
  }
</style>
