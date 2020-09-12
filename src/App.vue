<template>
  <div>
    <div>
      <navbar></navbar>
    <!--    <blogform></blogform>  
       <blogs></blogs> -->
       <router-view></router-view>
    </div>
  </div>
</template>

<style>
div{
    margin: 10px;
}
</style>


<script>
// import blogform from './form.vue'
// import blogs from './blogs.vue'
import navbar from './navbar.vue'

export default{
  components: {
    // blogform,
    // blogs,
    navbar
  }
}
</script>
