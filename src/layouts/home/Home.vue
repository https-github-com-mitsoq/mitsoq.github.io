<template>
  <div>
    <Header alt="Vue logo" src="./assets/logo.png"/>
    <div class="container">
      <Intro  msg="Welcome to app"/>
      <div class="container-inner">
        <div class="container-inner__item">
          <h3 class="heading heading--micro">Installed CLI Plugins</h3>
          <ul class="std-list">
            <li class="std-list__item">
              <a class="cta-text"
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
                target="_blank"
                rel="noopener">babel
              </a>
            </li>

            <li class="std-list__item">
              <a class="cta-text"
                href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
                target="_blank"
                rel="noopener">
                eslint
              </a>
            </li>
          </ul>
        </div>

        <div class="container-inner__item">
          <h3 class="heading heading--micro">Essential Links</h3>
          <ul class="std-list">
            <li class="std-list__item">
              <a class="cta-text" href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
            </li>
          </ul>
        </div>

        <div class="container-inner__item">
          <h3 class="heading heading--micro">Ecosystem</h3>
          <ul class="std-list">
            <li class="std-list__item">
              <a class="cta-text" href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a>
            </li>

            <li class="std-list__item">
              <a class="cta-text" href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import Header from '../../components/Header.vue';
 import Intro from '../../components/Intro.vue';

  export default {
    name: 'Home',
    components: {
      Header,
      Intro
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
