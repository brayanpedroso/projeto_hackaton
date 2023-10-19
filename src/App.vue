<script setup>
</script>

<template>
  <div>
    <div id="logo-url">
      <img id="logo" alt="Vue logo" class="logo" src="src\assets\img\m1.png" width="149" height="110" />
    </div>
    <nav class="nav">
      <div><router-link to="/">Home</router-link></div>
      <div><router-link to="/pisos-item">pisos</router-link></div>
      <div><router-link to="/contratar-item">contratar</router-link></div>
      
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
 #logo-url {
    margin: auto;
    margin-left: 0;
    margin-top: -105%;
    margin-left: -125%;
  }
  .nav {
    background: linear-gradient(183deg, rgba(155, 155, 155, 0.54) 0%, rgba(217, 217, 217, 0.00) 100%);
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 424%;
    height: 100px;
    flex-shrink: 0;
    margin-left: -95%;
    margin-top:-30%; 
  }
  a {
  text-decoration: none;
  color: #fff;
  width: 75px;
  font-size: 32px;
  font-weight: 400;
  font-family: Inter;
  line-height: normal;
  font-style: normal;
 margin-left: -900%;
}
  * {
      font-family: Helvetica;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      
        
    }
    .main-container {
      margin: 50px;
      min-height: 250px;
    }
  
 
  
    h1 {
      text-align: center;
      font-size: 42px;
      margin-bottom: 30px;
      color: #222;
    }
  



</style>