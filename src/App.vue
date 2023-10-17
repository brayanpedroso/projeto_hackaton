<script setup>
</script>

<template>
  <div>
  <img id="logo" src="@/assets/img/m1.png" :alt="as">
    <nav class="nav">
      
      <router-link to="/">Home</router-link>
      <router-link to="/pisos-item">pisos</router-link>
      <router-link to="/contratar-item">contratar</router-link>
     
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
 .nav{
  background: linear-gradient(183deg, rgba(155, 155, 155, 0.54) 0%, rgba(217, 217, 217, 0.00) 100%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 445%;
    height: 100px;
    flex-shrink: 0;
    margin-top: -129%;
    margin-left: -114%;
    
}

a { 
  color: inherit; 
  text-decoration: none;
  width: 445%;
  line-height: normal;
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  width: 20%;
  height: 71px;
  margin-left: 10%;
  color: #000000;

} 
#logo {
    width: 70px;
    height: 70px;
   
  }




</style>