<template>
  <section>
    <template>
      <intro msg="About us"/>
    </template>
  </section>
</template>

<script>
import Intro from '../components/Intro';
  export default {
    name: 'About',
    prop: [
      { selectedValue: Boolean },
      { selectedValue: String },
    ],
    components: {
        Intro,
    },
    data() {
      return {
        name: 'Define page data here'
      }
    }
  }
</script>
