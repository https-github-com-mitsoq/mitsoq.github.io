<template>
  <section>
    <template>
      <h1 class="heading heading--primary">About us</h1>
    </template>
  </section>
</template>

<script>
  export default {
    name: 'About',
    prop: [
      { selectedValue: Boolean },
      { selectedValue: String },
    ],
    data() {
      return {
        name: 'Define page data here'
      }
    }
  }
</script>
