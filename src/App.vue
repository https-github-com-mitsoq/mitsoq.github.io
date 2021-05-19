<template>
  <div id="app" class="app">
    <div id="header" class="header">
      <nav class="logo">
        <img class="logo__thumbnail" alt="Logo" src="./assets/logo.png"/>
      </nav>
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list__item">
             <router-link to="/" class="cta-text">Home</router-link>
          </li>
          <li class="menu-list__item">
           <router-link to="/about" class="cta-text">About</router-link>
          </li>
          <li class="menu-list__item">
            <a class="cta-text" href="https://cli.vuejs.org" target="_blank" rel="noopener">Vue guide</a>
          </li>
        </ul>
      </div>
    </div>

    <!--Body of dynamic page -->
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
  </script>

  <style>
    .app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }

    .header {
      align-items: center;
      display: flex;
      justify-content: center;
    }

    .logo__thumbnail {
      width: 100px;
    }

    .menu-list {
      display: block;
      font-style: none;
      margin: 0 auto;
    }
    .menu-list__item {
      display: inline-block;
      margin: 0 15px 0 0;
    }

    .cta-text {
      color: gray;
      text-transform: lowercase;
    }
    .cta-text:focus,
    .cta-text:visited,
    .cta-text:hover {
      color: gray;
    }
  </style>
