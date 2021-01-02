<template>
  <div id="app" class="d-flex flex-column" style="height: 100vh">
    <Header/>
    <router-view class="flex-grow-1"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer,  Header}
}
</script>
<style>

ul li{
  list-style: none;
}

ul li a{
  text-decoration: none;
}

a{
  text-decoration: none;
  color: black;
}


</style>
