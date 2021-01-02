<template>
  <header>
    <div class="container ">
      <div class="row align-items-center justify-content-between">
        <router-link to="/" class="font-weight-normal" style="font-size: 30px">Dashboard</router-link>
        <nav class="nav-fill d-flex align-items-center justify-content-between p-4">
          <router-link to="/" class="mr-5 font-weight-normal">Home</router-link>
          <router-link to="/employees" class="mr-5 font-weight-normal">Employees</router-link>
          <router-link to="/about" class="mr-5 font-weight-normal">About</router-link>
        </nav>
      </div>

    </div>

  </header>

</template>

<style scoped>

header {
  background: #283044;
  color: #ffffff;
}

a {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
}

a:hover{
  color: #EBF5EE;
  text-decoration: none;
}

ul li a {
  text-decoration: none;
  color: #1D293F !important;
}
</style>