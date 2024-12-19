<script setup>
  import Header from './components/header.vue';
  import Footer from './components/footer.vue';
</script>

<template>
  <Header/>

  <main>  
    <RouterView></RouterView>
  </main>

  <Footer/>
</template>

<style scoped>
</style>
