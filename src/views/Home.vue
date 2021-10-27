<template>
    <div class="container">
        <scroll-container />
    </div>
</template>

<script>
 import scrollContainer from '../components/vueContainer.vue'

  export default {
    name: 'Home',
    props: {
       selectFacet: {
            type: Function,
            required: false,
            default: () => {
                return
            }
        }
    },
    data() {
        return {
            innerContent: true
        }
    },
    components: {
        scrollContainer
    },
    computed: {
        innerContentClass() {
            return this.innerContent;
        }
    },
    methods: {
      goBack() {
        window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      }
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
</style>
