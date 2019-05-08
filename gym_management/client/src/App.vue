<template>
  <div id="app" class="container-fluid">
    <div class= "display-3" style= "font-size: 80px; width: 100%">
    <img alt="A1 logo" src="./assets/a1logo.jpg" id="a1logo" >
    <b>Gym Management System</b>
    </div>
    <Navbar />
    <router-view/>
  </div>

</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {Navbar}
}
</script>


<style>

@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css');
</style>
